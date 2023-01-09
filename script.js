const cores = [];
const box = document.getElementById('box');
let cor = 'black';
let linha = 0;
let coluna = 0;
let pixel = '';

function criarCores() {
  const random = [];
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      random[j] = (Math.random() * 256);
    }
    cor = 'rgb(' + (random[0]) + ',' + (random[1]) + ',' + (random[2]) + ')';
    cores.push(cor);
    cor = 'black';
  }
}

function criarBotoes() {
  const escolhas = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const button = document.createElement('button');
    if (i === 0) {
      button.value = 'black';
      button.style.backgroundColor = 'black';
      button.classList = 'selected';
    } else {
      button.value = cores[i];
      button.style.backgroundColor = cores[i];
    }
    button.classList.add('color');
    button.type = 'button';
    escolhas.appendChild(button);
  }
}

function criarPixel() {
  linha = document.querySelectorAll('.linha');
  for (let i = 0; i < linha.length; i += 1) {
    for (coluna = 1; coluna <= 5; coluna += 1) {
      pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = i + '' + coluna;
      linha[i].appendChild(pixel);
    }
  }
}

function selecaoCor() {
  const paleta = document.getElementById('color-palette');
  paleta.addEventListener('click', function (button) {
    const elementoClasse = button.target.classList;
    if (elementoClasse[0] === 'color') {
      const elemento = document.getElementsByClassName('selected');
      elemento[0].classList.remove('selected');
      elementoClasse.add('selected');
      const selecao = document.getElementsByClassName('selected');
      cor = selecao[0].style.backgroundColor;
      if (cor === 'black') {
        box.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      } else {
        box.style.backgroundColor = cor.substring(0, cor.length - 1) + ', 0.8)';
      }
      return cor;
    }
  });
}

function pintar() {
  const linha = document.getElementById('box');
  linha.addEventListener('click', function (div) {
    const ponto = document.getElementById(div.target.id);
    if (ponto !== null && ponto.className === 'pixel') {
      ponto.style.background = cor;
    }
  });
}

// function limpar() {
//   const btnLimpar = document.getElementById('clear-board');
//   btnLimpar.addEventListener('click', function () {
//     for (let i = 0; i < linha.length; i += 1) {
//       for (coluna = 1; coluna <= 5; coluna += 1) {
//         pixel = document.getElementById(i + '' + coluna);
//         pixel.style.backgroundColor = 'rgb(255, 255, 255)';
//       }
//     }
//     box.style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
//     const elemento = document.getElementsByClassName('selected');
//     elemento[0].classList.remove('selected');
//     const btn = document.getElementsByClassName('color');
//     const aux = btn[0];
//     aux.classList.add('selected');
//     cor = 'black';
//   });
//   return cor;
// }

criarCores();
criarBotoes();
criarPixel();
selecaoCor();
pintar();
// limpar();
