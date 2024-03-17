// Удалённая database
const moneyList = require("../database/bank.database");

class Money {
  // Запрос всех данных
  getMoney() {
    return moneyList;
  }

  // Добавление данных
  // createUser(name) {
  //   const newUser = {
  //     id: Date.now() + Math.ceil(Math.random() * 1000), // генератор id
  //     name,
  //   };
  //   userList.push(newUser);
  //   return this.getUserAll();
  // }
  // Изменение данных
  // changeUserStatus(name, data) {
  //   const foundIndex = this.#findIndexByName(name);
  //   userList[foundIndex].name = data;
  //   return this.getUserAll();
  // }
  // Удаление данных
  // removeUser(name) {
  //   const foundIndex = this.#findIndexByName(name);
  //   userList.splice(foundIndex, 1);
  //   return this.getUserAll();
  // }
  // Поиск index элемента
  // #findIndexByName(name) {
  //   return userList.findIndex((user) => user.name === name);
  // }
}

module.exports = new Money();
