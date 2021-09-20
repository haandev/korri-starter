const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./../model/User");

const login = async (request, response) => {
  /**
   * @description
   * @request
   * @param mehmet
   */
  try {
    const { username, password } = request.body;
    if (!(username && password)) {
      response.status(400).send("All input is required");
    }
    const user = await User.findOne({
      where: { username },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { ...user.dataValues, password: undefined },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      response
        .status(200)
        .send({ ...user.dataValues, password: undefined, token });
    } else response.status(400).send("Invalid Credentials");
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const user = async (request, response) => {
  response.status(200).send(request.user);
};

const passwordChange = async (request, response) => {
  const username = request.user.username;
  const oldPassword = request.body.old_password;
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
