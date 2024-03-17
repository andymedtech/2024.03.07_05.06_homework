const { Router } = require("express");
const router = new Router();

const moneyController = require("../controller/money.controller");

// Получить данные
router.get("/", moneyController.getMoney);

// Добавить данные
router.post("/", moneyController.addMoney);

// Изменить данные
// router.put("/", userController.changeUserStatus);

// Удалить данные
// router.delete("/", userController.removeUser);

module.exports = router;
