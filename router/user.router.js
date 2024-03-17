const { Router } = require("express");
const router = new Router();

const userController = require("../controller/user.controller");

// Получить данные
router.get("/", userController.getUserAll);

// Добавить данные
router.post("/", userController.createUser);

// Изменить данные
router.put("/", userController.changeUserStatus);

// Удалить данные
router.delete("/", userController.removeUser);

module.exports = router;
