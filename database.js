const fs = require("fs");

let file = __dirname + "/data.json";


//synchronously save and write function
// module.exports = {
//   save(data) {
//     // console.log(data);
//     fs.writeFileSync("data.json", JSON.stringify(data));
//   },
//   load() {
//     // console.log(data);
//     return JSON.parse(fs.readFileSync("data.json"));
//   }
// };

//rewrite with async and await this code in our database

// This async function returns a promise that resolves to the the asynchronously
// read content in our FILE by fs.readFile

module.exports.read = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      else {
        let convertedData = JSON.parse(data);
        resolve(convertedData);
      }
    });
  });
};

// This async function returns a promise that the 'data' we pass into
// this function has been asynchrnously written into our file.

module.exports.write = async data => {
  let convertedData = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(file, convertedData, err => {
      if (err) reject(err);
      else resolve();
    });
  });
};
