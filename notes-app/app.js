// const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is Andrew.");
// fs.appendFileSync("notes.txt", " I love dogs.");

// const add = require("./utils");
// const sum = add(4, -2);
// console.log(sum);

// const validator = require("validator");
// console.log(validator.isEmail("andrew@example.com"));
// console.log(validator.isURL("https://mead.io"));

const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// const notes = getNotes();
// console.log(notes);
// console.log(chalk.green.bold.inverse("Success!"));

// console.log(process.argv)

// const command = process.argv[2];

// if (command === "add") {
//   console.log("adding note!");
// } else if (command === "remove") {
//   console.log("removing note!");
// }

yargs.version("1.1.0");

// add
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title} \nBody: ${argv.body}`);
  },
});

// remove
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("removing note!");
  },
});

// list
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("listing out all notes!");
  },
});

// read
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("reading note!");
  },
});

// console.log(yargs.argv);
yargs.parse();
