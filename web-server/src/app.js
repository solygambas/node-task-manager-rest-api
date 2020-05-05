require("dotenv").config();
const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// app.get("/help", (req, res) => res.send({ name: "Andrew", age: 27 }));
// app.get("/about", (req, res) => res.send("<h1>About</h1>"));

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "public"));

// Setup handlebars engine and views directory
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) =>
  res.render("index", {
    title: "Weather",
    name: "Solygambas",
  })
);

app.get("/about", (req, res) =>
  res.render("about", {
    title: "About",
    name: "Solygambas",
  })
);

app.get("/help", (req, res) =>
  res.render("help", {
    title: "Help",
    name: "Solygambas",
    message: "I am here to help you",
  })
);

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "You must provide an address" });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

// app.get("/products", (req, res) => {
//   if (!req.query.search) {
//     return res.send({ error: "You must provide a search term" });
//   }
//   console.log(req.query);
//   res.send({
//     products: [],
//   });
// });

app.get("/help/*", (req, res) =>
  res.render("404", {
    title: "404 - Help article not found",
    name: "Solygambas",
    message: "Sorry, help article not found.",
  })
);
app.get("*", (req, res) =>
  res.render("404", {
    title: "404 - Page not found",
    name: "Solygambas",
    message: "Sorry, page not found.",
  })
);

app.listen(port, () => console.log(`Server is up at http://localhost:${port}`));
