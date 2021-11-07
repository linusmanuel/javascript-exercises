/* 
Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 
*/
let start = prompt('Inicio do jogo: [HORAS]: ')
let end = prompt("Fim do jogo: [HORAS]: ")

let timePlayed = (start, end) => {
  let duraction = end > start ? end - start : (start - end);
  return duraction
}

console.log(`O Jogo teve a duração de ${timePlayed(start, end)} horas`);

// Att: Lógica incompleta!