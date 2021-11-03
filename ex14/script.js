/* 
Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido 
for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!
*/
let valor = parseInt(prompt("Informe algum número"));

let maiorQue10 = (valor) => {
  if (valor > 10) {
    console.log(`${valor}, é maior que ${10}`);
  } else console.log(`${valor}, não é maior que ${10}`);
};

maiorQue10(valor);
