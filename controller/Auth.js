const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uid2 = require("uid2");

const User = require("./../model/User");
const Login = require("./../model/Login");

const login = async (request, response) => {
  try {
    const { username, password } = request.body;
    if (!(username && password)) {
      response.status(400).send("All input is required");
    }
    const user = await User.findOne({
      where: { username },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      /* Omit here the sensitive information in User model to generate jwt */
      const {
        password,
        refreshToken,
        ...payload
      } = user.dataValues;

      const token = jwt.sign(
        payload,
        process.env.TOKEN_KEY,
        {
          expiresIn: "120m",
        }
      );

      const _refreshToken = uid2(64)

      const expires = new Date();
      expires.setMinutes(expires.getMinutes()+30);

      await Login.create({
        userId : user.id,
        refreshToken : _refreshToken,
        firstIp : request.clientIp,
        userAgent: request.headers['user-agent'],
        expiredAt : expires.toISOString()
      });

      response.cookie("refreshToken", _refreshToken, {
        secure: process.env.NODE_ENV !== "development",
        httpOnly: true,
        expires
      });

      response
        .status(200)
        .send({ ...payload, token });
    } else {
      response.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const user = async (request, response) => {
  response.status(200).send(request.authUser);
};

const passwordChange = async (request, response) => {
  const username = request.user.username;
  const oldPassword = request.body.oldPassword;
  const newPassword = request.body.password;

  try {
    const user = await User.findOne({
      where: { username },
    });
    if (!user) {
      response.status(404).send("User not found");
    } else if (!(await bcrypt.compare(oldPassword, user.password))) {
      response.status(401).send("Old password is wrong");
    } else {
      user.password = await bcrypt.hash(newPassword, 10);
      await user.save();
      response.status(200).send("Password changed");
    }
  } catch (error) {
    response.status(500).send("Server error");
  }
};

module.exports = { login, passwordChange, user };
