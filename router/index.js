const { Router } = require("express");
const router = new Router();
const userRouter = require("./user.router");
const moneyRouter = require("./money.router");

router.use("/user", userRouter);
router.use("/money", moneyRouter);

module.exports = router;
