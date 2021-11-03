/* 
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, 
e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que 
leia o número de maçãs compradas, calcule e escreva o custo total da compra.
*/

let macas = parseInt(prompt("Informe quantas maçãs vai querer: "));
let totalCompra;

if (macas >= 12) {
  totalCompra = macas * 1;
} else totalCompra = macas * 1.3;

console.log(`Total compra: R$: ${totalCompra}`);
