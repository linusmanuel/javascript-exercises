/* 
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total 
de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva 
o salário final do vendedor.
*/
let carrosVendidos = parseInt(prompt("Número de carros vendidos?: "));
let valorVenda = parseFloat(prompt("Valor total de vendas?: "));
let salarioBase = parseFloat(prompt("Salario base: "));
let comissao = parseFloat(prompt("Valor por carro vendido: "));

let calcualarSalarioFinal = (carroVendido, salario, comissao, vendas) => {
  // SalarioFinal = salarioBase + comissao por carro vendido + 5% valorVendas
  let salarioFinal = salario + comissao * carroVendido + (vendas * 5) / 100;

  return salarioFinal;
};

console.log(
  `Salario Final: ${calcualarSalarioFinal(
    carrosVendidos,
    salarioBase,
    comissao,
    valorVenda
  )}`
);
