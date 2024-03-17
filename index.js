const express = require("express");
const app = express();
const router = require("./router");

app.use(express.json());
app.use(router);

app.listen(8080);

// > запустить node index
// postman http://localhost:8080/user
//
// GET - клиенты
//
// POST - добавить клиента - body raw-JSON
// {
//     "name": "Ryan"
// }
//
// PUT - добавить VIP статус клиента - Body raw-JSON
// {
//     "name": "Joanne"
// }
//
// DELETE - удалить клиента - Body raw-JSON
// {
//     "name": "Eliot"
// }
// ========================================
// postman http://localhost:8080/money
//
// GET - клиенты + деньги

//
// POST - добавить клиента - body raw-JSON
// {
//     "name": "Ryan"
// }
//
// PUT - добавить VIP статус клиента - Body raw-JSON
// {
//     "name": "Joanne"
// }
//
// DELETE - удалить клиента - Body raw-JSON
// {
//     "name": "Eliot"
// }
