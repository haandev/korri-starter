const router = require("express").Router();

const AuthMiddleware = require("./../middleware/Auth");
const Auth = require("./../controller/Auth");

router.post("/login", Auth.login, Auth.user);

router.post("/user", Auth.user);

router.post("/password-change", AuthMiddleware, Auth.passwordChange);

module.exports = router;
