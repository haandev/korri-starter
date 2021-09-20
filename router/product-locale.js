const router = require("express").Router();

const ProductLocale = require("./../controller/ProductLocale");

router.get("/", ProductLocale.getAll);

router.get("/:id", ProductLocale.getById);

router.post("/", ProductLocale.create);

router.put("/:id", ProductLocale.update);

router.delete("/:id", ProductLocale.destroy);

module.exports = router;
