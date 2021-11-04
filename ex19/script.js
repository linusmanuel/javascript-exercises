/* 
Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles
*/
let value1 = parseInt(prompt(`Informe o 1º valor`));
let value2 = parseInt(prompt(`Informe o 2º valor`));

let biggest = (value1, value2) => {
  if (value1 > value2) {
    return `${value1} é maior que ${value2}`;
  } else return `${value2} é maior que ${value1}`;
};

console.log(biggest(value1, value2));
