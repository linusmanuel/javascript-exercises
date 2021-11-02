/* 
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do 
distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de 
fábrica de um carro, calcular e escrever o custo final ao consumidor.
*/
let custoFabrica = parseFloat(prompt("Qual é o custo de fabrica do carro?: "));

let calcularCusto = (custo) => {
  let percentDistribuidor = (custo * 28) / 100;
  let imposto = (custo * 45) / 100;
  let custoConsumidor = custo + percentDistribuidor + imposto;

  return custoConsumidor;
};

console.log(
  `Ao consumidor o carro será vendido a ${calcularCusto(custoFabrica)}`
);
