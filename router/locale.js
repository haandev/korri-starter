const router = require("express").Router();

const Locale = require("./../controller/Locale");
const AuthMiddleware = require("./../middleware/Auth");

router.get("/", AuthMiddleware, Locale.getAll);
router.get("/:id", Locale.getById);
router.post("/", AuthMiddleware, Locale.create);
router.put("/:id", Locale.update);
router.delete("/:id", Locale.destroy);

module.exports = router;
