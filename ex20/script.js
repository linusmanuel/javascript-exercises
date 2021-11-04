/* 
Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente
*/
const values = [];
let value1 = parseInt(prompt(`Informe o 1º valor`));
let value2 = parseInt(prompt(`Informe o 2º valor`));

values.push(value1, value2);

let ordenated = values.sort();
for (value of values) {
  console.log(value);
}
