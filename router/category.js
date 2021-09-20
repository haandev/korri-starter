const router = require("express").Router();

const Category = require("./../controller/Category");

router.get("/", Category.getAll);
router.get("/:id", Category.getById);
router.post("/", Category.create);
router.put("/:id", Category.update);
router.delete("/:id", Category.destroy);

module.exports = router;
