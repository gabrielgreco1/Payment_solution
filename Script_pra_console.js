const path = require("path");
const readFile = require("fs").promises.readFile;

const extractInterval = (filepath) => {
const file = path.resolve(__dirname, "ARQUIVO_PIX.txt");
readFile(file)
.then(data => {
const lines = data.toString().split('\n');
console.log([" CNPJ | CHV PIX | STATUS "]);
console.log(["-------------------------------------------"]);
for (let i = 2; i < lines.length; i += 2) {
const line1 = lines[i];
const interval1 = line1.substring(203, 218).trim();
const line2 = lines[i + 1];
const interval2 = line2.substring(127, 160).trim();
const condicao = (interval1 == interval2) ? 'Correto' : 'Errado';
console.log([interval1, interval2, condicao]);
}
})
.catch(err => console.log(err));
}

extractInterval();
