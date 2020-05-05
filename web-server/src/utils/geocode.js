const request = require("request");

const geocode = (address, callback) => {
  const token = process.env.TOKEN;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${token}&limit=1`;
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to geocoding service!");
    } else if (body.features.length === 0) {
      callback("Unable to find location! Try another search.");
    } else {
      const data = {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      };
      callback(undefined, data);
    }
  });
};

module.exports = geocode;
