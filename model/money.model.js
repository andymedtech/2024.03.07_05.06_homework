// Удалённая database
const moneyList = require("../database/bank.database");

class Money {
  // Запрос всех данных
  getMoney() {
    return moneyList;
  }

  // Изменение данных
  addMoney(name, money) {
    const foundIndex = this.#findIndexByName(name);
    moneyList[foundIndex].money += Number(money);
    return moneyList;
  }

  // Поиск index элемента
  #findIndexByName(name) {
    return moneyList.findIndex((user) => user.name === name);
  }
}

module.exports = new Money();
