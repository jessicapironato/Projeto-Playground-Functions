// Desafio 1
// Iniciando o projeto. Utilize console.log() para testar as funções localmente, mas remova antes de fazer o push

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(palavras) {
  return palavras.split(' ');
}

// Desafio 4
function concatName(itens) {
  return itens[itens.length -1] + ", " + itens[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let contador = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (let index = 0; index <= array.length; index += 1) {
    if (maior === array[index]) {
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
