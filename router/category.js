const router = require("express").Router();

const Category = require("./../controller/Category");
const AuthMiddleware = require("./../middleware/Auth");

router.get("/", AuthMiddleware, Category.getAll);
router.get("/:id", Category.getById);
router.post("/", AuthMiddleware, Category.create);
router.put("/:id", Category.update);
router.delete("/:id", Category.destroy);

module.exports = router;
