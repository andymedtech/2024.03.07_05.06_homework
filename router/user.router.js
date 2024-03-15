const { Router } = require("express");
const router = new Router();

const userController = require("../controller/user.controller");

// Получить данные
router.get("/", userController.getAll);

// Добавить данные
router.post("/", userController.create);

// Изменить данные
router.put("/", userController.update);

// Удалить данные
router.delete("/", userController.remove);

module.exports = router;
