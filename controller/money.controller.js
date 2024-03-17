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

  // Изменить данные
  // changeUserStatus(req, res) {
  //   const userName = req.body.name;
  //   const userList = userModel.changeUserStatus(userName, userName + "-VIP");
  //   res.json(jsonView(200, "Success = Status User VIP", userList));
  // }
  // Удалить данные
  // removeUser(req, res) {
  //   const userName = req.body.name;
  //   const userList = userModel.removeUser(userName);
  //   res.json(jsonView(200, "Success = Remove User", userList));
  // }
}

module.exports = new bankMoney();
