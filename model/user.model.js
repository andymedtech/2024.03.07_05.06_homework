// Удалённая database
const userList = require("../database/bank.database");

class User {
  // Запрос всех данных
  getAll() {
    return userList;
  }

  // Запрос данных по имени
  getByName(name) {
    return userList.find((user) => user.name === name);
  }

  // Добавление данных
  create(name) {
    const newUser = {
      id: Date.now() + Math.ceil(Math.random() * 1000), // генератор id
      name,
    };
    userList.push(newUser);
    return userList;
  }

  // Удаление данных
  deleteByName(name) {
    const foundIndex = this.#findIndexByName(name);
    userList.splice(foundIndex, 1);
    return userList;
  }

  // Изменение данных
  updateByName(name, data) {
    const foundIndex = this.#findIndexByName(name);
    // userList[foundIndex] = { ...userList[foundIndex], ...data };
    userList[foundIndex].name = data;
    return userList;
  }

  // Поиск index элемента
  #findIndexByName(name) {
    return userList.findIndex((user) => user.name === name);
  }
}

module.exports = new User();
