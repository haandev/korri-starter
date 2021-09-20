const router = require("express").Router();

const Token = require("./../controller/Token");

router.get("/", Token.getAll);

router.get("/:id", Token.getById);

router.post("/", Token.create);

router.put("/:id", Token.update);

router.delete("/:id", Token.destroy);

module.exports = router;
