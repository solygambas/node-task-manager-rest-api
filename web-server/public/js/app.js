// fetch("http://puzzle.mead.io/puzzle")
//   .then((response) => {
//     response.json().then((data) => {
//       alert(data.puzzle);
//     });
//   })
//   .catch();

const weatherForm = document.getElementById("weather-form"); // document.querySelector('#weather-form')
const weatherInput = document.getElementById("weather-input");
const weatherForecast = document.getElementById("weather-forecast");
const weatherLocation = document.getElementById("weather-location");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = weatherInput.value;
  weatherLocation.textContent = "Loading...";
  weatherForecast.textContent = "";
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        //   console.log(data.error);
        weatherLocation.textContent = data.error;
      } else {
        //   console.log(data.location);
        //   console.log(data.forecast);
        weatherLocation.textContent = data.location;
        weatherForecast.textContent = data.forecast;
      }
    });
  });
});
