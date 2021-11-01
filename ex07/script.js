/* 
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, 
meses e dias e escreva a idade dessa pessoa expressa apenas em dias. 
Considerar ano com 365 dias e mês com 30 dias. 
*/
let ageToDays = (age) => {
  days = age * 365;
  console.log(`Você tem ${days} dias de vida`);
};

ageToDays(21);
