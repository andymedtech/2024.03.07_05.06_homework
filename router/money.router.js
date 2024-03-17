const { Router } = require("express");
const router = new Router();

const moneyController = require("../controller/money.controller");

// Получить данные
router.get("/", moneyController.getMoney);

// Добавить данные
router.post("/", moneyController.addMoney);

module.exports = router;
