/* 
A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas). 
*/
let workedHours = parseInt(prompt('Horas trabalhadas na semana: '))
let salaryHour = parseInt(prompt('Salário por hora: '))

let calcSalary = (hours, salary) => {
  let totalSalary
  let normalSalary = (salary * hours) * 4
  let overTime = (hours * 4) - 160

  let overTimeSalary = (salary * 0.5) * overTime

  if (overTime > 0) {
    totalSalary = normalSalary + overTimeSalary
  } else {
    totalSalary = normalSalary
  }

  console.log(overTime)
  console.log(
    "Over time salary: " + overTimeSalary + "normal: " + normalSalary
  );

  return totalSalary
}

console.log(`Seu salário total é de: ${calcSalary(workedHours, salaryHour)}`);

// Att: Salário total incorrecto!