/* 
Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total. 
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
