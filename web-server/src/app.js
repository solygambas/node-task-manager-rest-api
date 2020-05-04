const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// app.get("/help", (req, res) => res.send({ name: "Andrew", age: 27 }));
// app.get("/about", (req, res) => res.send("<h1>About</h1>"));

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "public"));
app.set("view engine", "hbs");

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/weather", (req, res) =>
  res.send({
    forecast: "Sunny",
    location: "Montpellier",
  })
);

app.listen(port, () => console.log(`Server is up at http://localhost:${port}`));
