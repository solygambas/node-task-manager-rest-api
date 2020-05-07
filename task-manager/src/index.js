const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// const router = new express.Router();
// router.get("/test", (req, res) => {
//   res.send("this is from my other router");
// });
// app.use(router);
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is up at http://localhost:${port}`));
