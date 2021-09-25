const jwt = require("jsonwebtoken");
const Login = require("./../model/Login");

const verifyToken = async (request, response, next) => {
  const {refreshToken,accessToken} = request.cookies
  const authorizationHeader = request.headers["authorization"];
  if (!accessToken && (!authorizationHeader || !authorizationHeader?.startsWith("Bearer "))) {
    return response.status(403).send("Invalid Authorization Strategy");
  }
  const token = authorizationHeader?.substring(7, authorizationHeader?.length) || accessToken;
  if (!token) {
    return response.status(403).send("A token is required for authentication");
  }
  try {
    request.authUser = jwt.verify(token, process.env.TOKEN_KEY);
  } catch (err) {
    const login = await Login.findOne({
      where: { refreshToken },
    });
    const user = jwt.decode(token);
    if (login && user && login.userId === user.id) {
      const {iat,exp,...payload} = user

      const token = jwt.sign(
          payload,
          process.env.TOKEN_KEY,
          {
            expiresIn: "1m",
          }
      );

      const expires = new Date();
      expires.setMinutes(expires.getMinutes()+1);

      response.cookie("accessToken ", token, {
        secure: process.env.NODE_ENV !== "development",
        httpOnly: true,
        expires
      });

      return next();
    } else {
      return response.status(401).send({login,user});
    }

  }
  return next();
};

module.exports = verifyToken;
