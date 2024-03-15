const userModel = require("../model/user.model");
const jsonView = require("../view/json.view");

// Получить данные
function getAll(req, res) {
  const userList = userModel.getAll();
  res.json(jsonView(200, "Success", userList));
}

// Добавить данные
function create(req, res) {
  const productName = req.body.name;
  const userList = userModel.create(productName);
  res.json(jsonView(200, "Success", userList));
}

// Изменить данные
function update(req, res) {
  const productName = req.body.name;
  // Для простоты добавим к имени "1"
  const userList = userModel.updateByName(productName, productName + "1");
  res.json(jsonView(200, "Success", userList));
}

// Удалить данные
function remove(req, res) {
  const productName = req.body.name;
  const userList = userModel.deleteByName(productName);
  res.json(jsonView(200, "Success", userList));
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
