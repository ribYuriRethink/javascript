const fs = require("fs");
const path = require("path");

function readDirectory(directory) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(directory);
      const filesPath = files.map((file) => path.join(directory, file));
      resolve(filesPath);
    } catch (e) {
      reject(e);
    }
  });
}

function filterFiles(array, patern) {
  return array.filter((file) => file.endsWith(patern));
}

function getFilesContent(array) {
  return new Promise((resolve, reject) => {
    try {
      const filesContent = array.map((file) =>
        fs.readFileSync(file).toString()
      );
      resolve(filesContent);
    } catch (e) {
      reject(e);
    }
  });
}

function joinArrayWith(pattern) {
  return function (array) {
    return array.join(pattern);
  };
}

function splitInArrayWith(pattern) {
  return function (array) {
    return array.split(pattern);
  };
}

//--------------Funções de remoção--------------
function removeEmptyElements(array) {
  return array.filter((el) => el !== "");
}

function removeElementsWithPattern(pattern) {
  return function (array) {
    return array.filter((el) => !el.includes(pattern));
  };
}

function removeNumbers(array) {
  return array.filter((el) => isNaN(el));
}

function removeSimbols(array, simbols) {
  //  Refatorado
  return array.map((line) =>
    simbols.reduce((acc, simbol) => acc.split(simbol).join(""), line)
  );
}
//   return array.map((line) => {
//     simbols.forEach((simbol) => {
//       line = line.split(simbol).join("");
//     });
//     return line;
//   });
// }

function countWords(array) {
  return Object.values(
    array.reduce((acc, word) => {
      const w = word.toLowerCase();
      if (!acc[w]) {
        acc[w] = { word: w, quantity: 0 };
      }
      acc[w].quantity++;
      return acc;
    }, {})
  );
}

function sortArrayBy(order = "asc") {
  return function (array) {
    order = order.toLowerCase();
    asc = (a, b) => a.quantity - b.quantity;
    desc = (a, b) => b.quantity - a.quantity;
    return array.sort(order === "desc" ? desc : asc);
  };
}

module.exports = {
  getFilesContent,
  filterFiles,
  readDirectory,
  joinArrayWith,
  splitInArrayWith,
  removeSimbols,
  removeEmptyElements,
  removeElementsWithPattern,
  removeNumbers,
  countWords,
  sortArrayBy,
};
