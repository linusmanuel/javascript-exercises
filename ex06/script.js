/* 
Escreva um algoritmo para ler as dimensões de um retângulo 
(base e altura), calcular e escrever a área do retângulo.
*/
let areaRetangulo = (base, height) => {
  let area = base * height;
  console.log(`Área do Retângulo, ${area}cm`);
  return area;
};

areaRetangulo(6, 5);
