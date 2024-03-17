// Удалённая database
const userList = require("../database/bank.database");

class User {
  // Запрос всех данных
  getUserAll() {
    const dbIn = ["id", "name"];
    const userOut = Object.fromEntries(
      Object.entries(userList).map(([key, value]) => [
        key,
        Object.fromEntries(
          Object.entries(value).filter(([subkey]) => dbIn.includes(subkey))
        ),
      ])
    );
    return userOut;
  }

  // Добавление данных
  createUser(name) {
    const newUser = {
      id: Date.now() + Math.ceil(Math.random() * 1000), // генератор id
      name,
      money: 0,
    };
    userList.push(newUser);
    return this.getUserAll();
  }

  // Изменение данных
  changeUserStatus(name, data) {
    const foundIndex = this.#findIndexByName(name);
    userList[foundIndex].name = data;
    return this.getUserAll();
  }

  // Удаление данных
  removeUser(name) {
    const foundIndex = this.#findIndexByName(name);
    userList.splice(foundIndex, 1);
    return this.getUserAll();
  }

  // Поиск index элемента
  #findIndexByName(name) {
    return userList.findIndex((user) => user.name === name);
  }
}

module.exports = new User();
