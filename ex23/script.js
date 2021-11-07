/* 
Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém
erros, identifique os erros no algoritmo apresentado abaixo:
Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
 - para sexo masculino: peso ideal = (72.7 * altura) - 58
 - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
inicio
  ler nome
  ler sexo
  se sexo = M então
    peso_ideal <- (72.7 * altura) - 58
  senão
    peso_ideal <- (62.1 * altura) – 44.7
  fim_se
  escrever peso_ideal
fim 
*/
let name = prompt('Informe seu nome: ')
let sex = prompt('Informe seu género: ')
let height = parseFloat(prompt('Informe sua altura: '))

let imc = (height, sex) => {
  let weight

  if (sex === 'M') {
    weight = (72.7 * height) - 58
  } else {
    weight = (62.1 * height) - 44.7
  }

  return weight
}

console.log(`Seu peso ideal é ${imc(height, sex)}`)