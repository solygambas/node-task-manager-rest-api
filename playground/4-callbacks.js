// undefined
// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     return data;
//   }, 2000);
// };

// const data = geocode("Montpellier");
// console.log(data);

// callback
// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Montpellier", (data) => {
//   console.log(data);
// });

// const add = (x, y, callback) => {
//   setTimeout(() => {
//     callback(x + y);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });
