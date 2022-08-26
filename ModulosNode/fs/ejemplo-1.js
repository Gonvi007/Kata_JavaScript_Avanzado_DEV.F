const fs = require("fs")

const archivos = fs.readdirSync("./arreglos");

console.log(archivos);