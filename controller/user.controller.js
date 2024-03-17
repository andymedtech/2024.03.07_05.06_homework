const userModel = require("../model/user.model");
const jsonView = require("../view/json.view");

class bankUser {
  // Получить данные
  getUserAll(req, res) {
    const userList = userModel.getUserAll();
    res.json(jsonView(200, "Success = Get User List", userList));
  }

  // Добавить данные
  createUser(req, res) {
    const newUserName = req.body.name;
    const userList = userModel.createUser(newUserName);
    res.json(jsonView(200, "Success = Create New User", userList));
  }

  // Изменить данные
  changeUserStatus(req, res) {
    const userName = req.body.name;
    const userList = userModel.changeUserStatus(userName, userName + "-VIP");
    res.json(jsonView(200, "Success = Status User VIP", userList));
  }

  // Удалить данные
  // removeUser(req, res) {
  //   const productName = req.body.name;
  //   const userList = userModel.deleteByName(productName);
  //   res.json(jsonView(200, "Success", userList));
  // }
}

module.exports = new bankUser();
