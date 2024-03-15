const express = require("express");
const app = express();
const router = require("./router");

app.use(express.json());
app.use(router);

app.listen(8080);

// > запустить node index
// > в postman http://localhost:8080/user
//
// GET - вывод данных
//
// POST
// В Body raw-JSON вписать
// {
//     "name": "Ryan"
// }
// Добавит новый продукт
//
// PUT
// В Body raw-JSON вписать
// {
//     "name": "Elena"
// }
// Изменит на name1
//
// DELETE
// В Body raw-JSON вписать
// {
//     "name": "Elena1"
// }
// Удалит name
