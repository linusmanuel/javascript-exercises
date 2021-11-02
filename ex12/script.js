/* 
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, 
calcular e escrever o valor correspondente em graus Celsius baseado
nesta fórmula: C = 5 * (F - 32) / 9.
*/
let gFahrenheit = parseInt(prompt("GRAUS Fahrenheit (ºF)"));

// Arrow function Convert graus
let CelsiusToFahrenheit = (graus) => (5 * (graus - 32)) / 9;
console.log(`${CelsiusToFahrenheit(gFahrenheit)}ºC`);
