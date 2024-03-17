const moneyModel = require("../model/money.model");
const indexView = require("../view/index.view");

class bankMoney {
  // Получить данные
  getMoney(req, res) {
    const moneyList = moneyModel.getMoney();
    res.end(indexView(moneyList));
  }

  // Добавить данные
  addMoney(req, res) {
    const userName = req.body.name;
    const userMoney = req.body.money;
    const moneyList = moneyModel.addMoney(userName, userMoney);
    res.end(indexView(moneyList));
  }
}

module.exports = new bankMoney();
