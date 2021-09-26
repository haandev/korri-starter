const router = require("express").Router();

const AuthMiddleware = require("./../middleware/Auth");
const Product = require("./../controller/Product");

router.get("/", AuthMiddleware, Product.getAll);

router.get("/:id", Product.getById);

router.post("/", Product.create);

router.put("/:id", Product.update);

router.delete("/:id", AuthMiddleware, Product.destroy);

module.exports = router;
