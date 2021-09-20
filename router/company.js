const router = require("express").Router();

const Company = require("./../controller/Company");

router.get("/", Company.getAll);

router.get("/:id", Company.getById);

router.post("/", Company.create);

router.put("/:id", Company.update);

router.delete("/:id", Company.destroy);

module.exports = router;
