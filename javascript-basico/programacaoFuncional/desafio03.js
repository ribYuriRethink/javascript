const fs = require("fs");
const path = require("path");

function getFileContent(name) {
  const directory = path.join(__dirname, name);

  return new Promise((resolve, reject) => {
    fs.readFile(directory, (err, content) => {
      if (err) {
        reject(new Error("Não foi possível ler o arquivo ou inexistente!"));
      } else {
        resolve(content.toString());
      }
    });
  });
}

const content = getFileContent("desafio.txt");

content.then((result) => console.log(result)).catch(console.log);
