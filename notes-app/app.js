// const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is Andrew.");
// fs.appendFileSync("notes.txt", " I love dogs.");

// const add = require("./utils");
// const sum = add(4, -2);
// console.log(sum);

// const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");

const notes = getNotes();
console.log(notes);
console.log(chalk.green.bold.inverse("Success!"));

// console.log(validator.isEmail("andrew@example.com"));
// console.log(validator.isURL("https://mead.io"));
