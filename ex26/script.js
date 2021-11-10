/* 
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'. 
*/
let quantidadeStoque = parseInt(prompt('Informe a QTD em estoque'))
let estoqueMaximo = parseInt(prompt('Informe a quantidade máxima do estoque'))
let estoqueMinimo = parseInt(prompt('Informe a quantidade mínima do estique'))

let quantidadeMedia = (estoqueMaximo + estoqueMinimo) / 2

if (quantidadeStoque >= quantidadeMedia) {
  console.log('Não efetuar conmpra')
}
else {
  console.log("Efetuar compra");
}
