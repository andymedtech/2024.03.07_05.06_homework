const userModel = require("../model/user.model");
const jsonView = require("../view/json.view");

class bankUser {
  // Получить данные
  getUserAll(req, res) {
    const userList = userModel.getUserAll();
    res.json(jsonView(200, "Success = User List", userList));
  }

  // Добавить данные
  // createUser(req, res) {
  //   const productName = req.body.name;
  //   const userList = userModel.create(productName);
  //   res.json(jsonView(200, "Success", userList));
  // }

  // Изменить данные
  // changeUser(req, res) {
  //   const productName = req.body.name;
  //   // Для простоты добавим к имени "1"
  //   const userList = userModel.updateByName(productName, productName + "1");
  //   res.json(jsonView(200, "Success", userList));
  // }

  // Удалить данные
  // removeUser(req, res) {
  //   const productName = req.body.name;
  //   const userList = userModel.deleteByName(productName);
  //   res.json(jsonView(200, "Success", userList));
  // }
}

module.exports = new bankUser();
