/* 
Ler um valor e escrever se é positivo ou negativo 
(considere o valor zero como positivo). 
*/
let numero = parseInt(prompt("informe um número: "));

let positoOuNegativo = (numero) => {
  if (numero < 0) {
    console.log(`${numero} é negativo`);
  } else console.log(`${numero} é positivo`);
};

positoOuNegativo(numero);
