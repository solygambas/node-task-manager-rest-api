const fs = require("fs");

// create file
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync("1-json-play.json", bookJSON);

// read file
// const dataBuffer = fs.readFileSync("1-json-play.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json-play2.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Brad";
data.age = 26;

const userJSON = JSON.stringify(data);
fs.writeFileSync("1-json-play3.json", userJSON);
