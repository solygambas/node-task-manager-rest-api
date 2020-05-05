const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const apikey = process.env.API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${apikey}&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location!");
    } else {
      const data = `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}°C out. It feels more like ${body.current.feelslike}°C! Wind speed is ${body.current.wind_speed} km/h.`;
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
