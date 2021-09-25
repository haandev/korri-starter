const router = require("express").Router();

const Table = require("./../controller/Table");
const AuthMiddleware = require("./../middleware/Auth");

router.get("/", AuthMiddleware, Table.getAll);

router.get("/:id", Table.getById);

router.post("/", AuthMiddleware, Table.create);

router.put("/:id", Table.update);

router.delete("/:id", Table.destroy);

module.exports = router;
