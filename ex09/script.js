/* 
Escreva um algoritmo para ler o salário mensal atual de um funcionário 
e o percentual de reajuste. Calcular e escrever o valor do novo salário
*/
let salario = parseFloat(prompt("Informe o seu salário: "));
let reajuste = parseInt(prompt("Qual será o percentual de reajuste?: "));

let calcularSalario = (salario, ajuste) => {
  let novoSalario = salario + (salario * ajuste) / 100;
  return `Seu novo salário é: ${novoSalario},00Akz`;
};

console.log(calcularSalario(salario, reajuste));
