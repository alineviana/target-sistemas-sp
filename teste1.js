/* Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

*/
let index = 13;
let sum = 0;
let k = 0;

while (k < index) {
  k = k + 1;
  sum = sum + k;
}

console.log(sum); // 91
