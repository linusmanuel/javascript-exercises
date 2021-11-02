/* 
Escreva um algoritmo para ler o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores. 
*/
let totalEleitores = parseInt(prompt("Informe o número de eleitores: "));
let voteBlank = parseInt(prompt("Votos brancos: "));
let voteNull = parseInt(prompt("Votos nulos: "));
let voteValible = parseInt(prompt("Votos válidos: "));
let totalVotes = voteBlank + voteNull + voteValible;

console.log(`Vot. brancos: ${(voteBlank / totalEleitores) * 100}% dos votos`);
console.log(`Vot. nulos: ${(voteNull / totalEleitores) * 100}% dos votos`);
console.log(`Vot. válidos: ${(voteValible / totalEleitores) * 100}% dos votos`);
console.log(`Total de votos: ${totalVotes}`);
