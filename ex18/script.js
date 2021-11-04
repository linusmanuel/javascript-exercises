/* 
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 
*/
let year = parseInt(prompt("Informe o ano atual"));
let birthDay = parseInt(prompt("Informe o ano em que nasceu"));

let calcAge = (presentYear, birthDay) => {
  let age = presentYear - birthDay;
  return age;
};

let canIVote = (age) => {
  if (age >= 18) {
    return "Você está elegivel para votar este ano";
  } else return "Você não está elegivel para votar este ano";
};

console.log(canIVote(calcAge(year, birthDay)));
