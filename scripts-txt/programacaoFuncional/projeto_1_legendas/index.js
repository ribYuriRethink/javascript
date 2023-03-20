const { read } = require("fs");
const path = require("path");
const fn = require("./funcoes");

const directory = path.join(__dirname, "dados", "legendas");

const simbols = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

fn.readDirectory(directory)
  .then((files) => fn.filterFiles(files, ".srt"))
  .then((files) => fn.getFilesContent(files))
  .then(fn.joinArrayWith("\n"))
  .then(fn.splitInArrayWith("\n"))
  .then(fn.removeElementsWithPattern("-->"))
  .then((files) => fn.removeSimbols(files, simbols))
  .then(fn.removeNumbers)
  .then(fn.joinArrayWith(" "))
  .then(fn.splitInArrayWith(" "))
  .then(fn.removeEmptyElements)
  .then(fn.removeNumbers)
  .then(fn.countWords)
  .then(fn.sortArrayBy("desc"))
  .then(console.log);
