const router = require("express").Router();

const AuthMiddleware = require("./../middleware/Auth");
const ClientIpMiddleware = require('request-ip');

const Auth = require("./../controller/Auth");

router.post("/login", ClientIpMiddleware.mw(), Auth.login);

router.get("/user", AuthMiddleware, Auth.user);

router.post("/password-change", AuthMiddleware, Auth.passwordChange);

module.exports = router;
