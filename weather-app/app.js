// call stack
// console.log("Starting");
// setTimeout(() => {
//   console.log("2 seconds later");
// }, 2000);
// setTimeout(() => {
//   console.log("0 second");
// }, 0);
// console.log("Stopping");

require("dotenv").config();
const request = require("request");

const token = process.env.TOKEN;
const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Montpellier.json?access_token=${token}&limit=1`;

request({ url: mapboxUrl, json: true }, (error, response, body) => {
  if (error) {
    console.log("Unable to connect to geocoding service!");
  } else if (body.features.length === 0) {
    console.log("Unable to find location! Try another search.");
  } else {
    const latitude = body.features[0].center[1];
    const longitude = body.features[0].center[0];
    console.log(`${latitude}, ${longitude}`);
  }
});

// const apikey = process.env.API_KEY;
// const url = `http://api.weatherstack.com/current?access_key=${apikey}&query=Montpellier`;

// request({ url: url, json: true }, (error, response, body) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (body.error) {
//     console.log("Unable to find location!");
//   } else {
//     console.log(
//       `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}°C out. It feels more like ${body.current.feelslike}°C!`
//     );
//   }
// });
