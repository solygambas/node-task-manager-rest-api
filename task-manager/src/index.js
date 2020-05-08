const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

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

const pet = { name: "Hal" };

pet.toJSON = function () {
  console.log(this);
  return {};
};

console.log(JSON.stringify(pet));
