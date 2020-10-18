const express = require("express");
const router = express.Router();
const controller = require("../controller/funcionariosController");

router.get("/", controller.getAll);
router.get("/funcionarios", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postFuncionarios);
router.delete("/:id", controller.deleteFuncionarios);
router.put("/:id",controller.putFuncionarios);
router.patch("/:id", controller.patchFuncionarios);

module.exports = router;