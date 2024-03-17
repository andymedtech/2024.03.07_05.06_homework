const moneyModel = require("../model/money.model");
// const jsonView = require("../view/json.view");
const indexView = require("../view/index.view");

class bankMoney {
  // Получить данные
  getMoney(req, res) {
    const moneyList = moneyModel.getMoney();
    res.end(indexView(moneyList));
  }

  // Добавить данные
  // createUser(req, res) {
  //   const newUserName = req.body.name;
  //   const userList = userModel.createUser(newUserName);
  //   res.json(jsonView(200, "Success = Create New User", userList));
  // }
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
