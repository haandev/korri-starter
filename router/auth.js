const router = require("express").Router();

const AuthMiddleware = require("./../middleware/Auth");
const Auth = require("./../controller/Auth");

router.post("/login", Auth.login);

router.post("/user", AuthMiddleware, Auth.user);

router.post("/password-change", AuthMiddleware, Auth.passwordChange);

module.exports = router;
