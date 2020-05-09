const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });
// app.use((req, res, next) => {
//   res.status(503).send("Maintenance. Come back later.");
// });

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
// });

// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send();
// });

// const errorMiddleware = (req, res, next) => {
//   throw new Error("From my middleware");
// };

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

app.use(express.json());

// const router = new express.Router();
// router.get("/test", (req, res) => {
//   res.send("this is from my other router");
// });
// app.use(router);
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is up at http://localhost:${port}`));

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "redisred";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(hashedPassword);
//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatch);
// };
// myFunction();

// const jwt = require("jsonwebtoken");
// const myFunction = async () => {
//   const token = jwt.sign({ _id: "aaasbsd" }, "thismynodecourse", {
//     expiresIn: "7 days",
//   });
//   console.log(token);
//   const data = jwt.verify(token, "thismynodecourse");
//   console.log(data);
// };
// myFunction();

// const pet = { name: "Hal" };

// pet.toJSON = function () {
//   console.log(this);
//   return {};
// };

// console.log(JSON.stringify(pet));

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   const task = await Task.findById("5eb53793a1040641c49181e9");
//   await task.populate("owner").execPopulate();
//   console.log(task.owner);
//   const user = await User.findById("5eb53672fb7e8440ac29741e");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
