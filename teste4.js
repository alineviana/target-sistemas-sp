/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal 
da distribuidora.
 
*/

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;
let total = sp + rj + mg + es + outros;

console.log(total); // 180759.98

let percentual_SP = ((sp / total) * 100).toFixed(2);
let percentual_RJ = ((rj / total) * 100).toFixed(2);
let percentual_MG = ((mg / total) * 100).toFixed(2);
let percentual_ES = ((es / total) * 100).toFixed(2);
let percentual_OUT = ((outros / total) * 100).toFixed(2);

console.log(`Percentual de SP ${percentual_SP}%`); // Percentual de SP 37.53%
console.log(`Percentual de RJ ${percentual_RJ}%`); // Percentual de RJ 20.29%
console.log(`Percentual de MG ${percentual_MG}%`); // Percentual de MG 16.17%
console.log(`Percentual de ES ${percentual_ES}%`); // Percentual de ES 15.03%
console.log(`Percentual de Outros ${percentual_OUT}%`); // Percentual de Outros 10.98%
