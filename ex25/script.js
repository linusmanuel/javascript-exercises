/* 
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
*/
let numberOfCount = prompt('Informe seu número de conta')
let saldo = parseFloat(prompt('Informe o seu saldo'))
let debito = parseFloat(prompt('Informe o valor do débito'))
let credito = parseFloat(prompt('Informe o valor do credito'))
let saldoAtual = (saldo - debito) + credito

let verifyCredit = credit => {
  let status = (credit > 0 ? 'Saldo Positivo' : 'Saldo Negativo')
  return status
}

console.log(`Seu saldo atual: ${saldoAtual},00 
Status: ${verifyCredit(saldoAtual)} `)
