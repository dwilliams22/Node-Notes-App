const fs = require("fs");
const yargs = require("yargs");
const _ = require("lodash");

const notes = require("./notes.js");

let argv = yargs.argv;
console.log(argv);
let command = process.argv[2].toLowerCase();

if (command === "add") {
   notes.addNote(argv.title, argv.body);
} else if (command === "list") {
   notes.getAll();
}  else if (command === "read") {
   notes.getNote(argv.title);
}  else if (command === "remove") {
   notes.removeNote(argv.title);
} else {
   console.log("Command not recognized");
}