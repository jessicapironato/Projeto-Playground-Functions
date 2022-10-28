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
  let maior = array[0];
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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat1 > distCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let replace = [];
  for (let valor of array) {
    if (valor % 3 === 0 && valor % 5 === 0) {
      replace.push('fizzBuzz');
    } else if (valor % 3 === 0) {
      replace.push('fizz');
    } else if (valor % 5 === 0) {
      replace.push('buzz');
    } else {
      replace.push('bug!');
    }
  }
  return replace;
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
