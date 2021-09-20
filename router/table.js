const router = require("express").Router();

const Table = require("./../controller/Table");

router.get("/", Table.getAll);

router.get("/:id", Table.getById);

router.post("/", Table.create);

router.put("/:id", Table.update);

router.delete("/:id", Table.destroy);

module.exports = router;
