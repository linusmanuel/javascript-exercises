/* 
Escreva um algoritmo para ler um valor (do teclado) e escrever 
(na tela) o seu antecessor. 
*/
let showAntecessor = (valor) => {
  let antecessor = valor - 1;
  console.log(`O antecessor de ${valor} é ${antecessor}`);
};

showAntecessor(16);
