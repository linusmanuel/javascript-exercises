/* 
Ler um valor e escrever se é positivo, negativo ou zero.
*/
let number = parseInt(prompt('Informe um número'))

let verifyNumber = number => {
  if (number === 0) { console.log('Número zero foi informado') }
  else if (number > 0) { console.log('Positivo') }
  else { console.log('Negativo')}
}

verifyNumber(number)