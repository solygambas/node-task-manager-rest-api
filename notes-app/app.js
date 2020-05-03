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
const notes = require("./notes");

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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// list
yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.listNotes();
  },
});

// read
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();
