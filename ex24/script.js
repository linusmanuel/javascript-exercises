/* 
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
*/
let salary = parseFloat(prompt('Informe seu salario base: '))
let sale = parseFloat(prompt('Informe seu núemro de vendas: '))

let calcSalary = (salary, sale) => {
  let extra = sale - 1500
  let salaryPuls

  if (extra < 1500) {
    salaryPuls = salary + (sale * 0.3)
  }
  else {
    salaryPuls = salary + (sale * 0.3) + (extra * 0.5)
  }

  return salaryPuls
}

console.log(calcSalary(salary, sale))
