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
    };
    userList.push(newUser);
    return this.getUserAll();
  }

  // Запрос данных по имени
  // getByName(name) {
  //   return userList.find((user) => user.name === name);
  // }

  // Удаление данных
  // deleteByName(name) {
  //   const foundIndex = this.#findIndexByName(name);
  //   userList.splice(foundIndex, 1);
  //   return userList;
  // }

  // Изменение данных
  // updateByName(name, data) {
  //   const foundIndex = this.#findIndexByName(name);
  //   // userList[foundIndex] = { ...userList[foundIndex], ...data };
  //   userList[foundIndex].name = data;
  //   return userList;
  // }

  // Поиск index элемента
  // #findIndexByName(name) {
  //   return userList.findIndex((user) => user.name === name);
  // }
}

module.exports = new User();
