/* 
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é: (n1 * 2 + n2 * 3 + n3 * 5) / 10
*/
let notas = [];

for (let i = 0; i < 3; i++) {
  let nota = prompt(`Informe a ${i + 1}ª nota`);
  notas.push(nota);
}

let calcularMediaFinal = (nota1, nota2, nota3) => {
  nota1 *= 2;
  nota2 *= 3;
  nota3 *= 5;
  const mediaFinal = (nota1 + nota2 + nota3) / 10;

  return mediaFinal;
};

console.log(`Suas notas: ${notas}`);
console.log(`Sua média final é: ${calcularMediaFinal(...notas)}`);
