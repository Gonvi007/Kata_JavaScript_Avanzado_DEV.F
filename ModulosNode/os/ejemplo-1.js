// Me permite acceder a la memoria del sistema
const os = new require("os")

console.log(os);

let memoriaLibre = os.freemen()
let memoriaCompleta = os.totalmem()

console.log(memoriaLibre);
console.log(memoriaCompleta);