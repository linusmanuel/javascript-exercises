/* 
 Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.
*/
let notas = [];

for (let i = 0; i < 2; i++) {
  let nota = parseInt(prompt(`Informe a ${i + 1}ª nota`));
  notas.push(nota);
}

let media = (nota1, nota2) => {
  const media = (nota1 + nota2) / 2;
  return media;
};

let verificaAprovacao = (media) => {
  if (media >= 6) {
    return "Aprovado";
  } else return "Reprovado";
};

console.log(
  `Você foi ${verificaAprovacao(media(...notas))}, sua média é: ${media(
    ...notas
  )}`
);
