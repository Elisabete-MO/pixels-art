const cores = [];
let cor = 'black';

function criarCores() {
  const random = [];
  let cor;
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      random[j] = (Math.random() * 256);
    }
    cor = 'rgb(' + (random[0]) + ',' + (random[1]) + ',' + (random[2]) + ')';
    cores.push(cor);
  }
}

function criarBotoes() {
  const escolhas = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const button = document.createElement('button');
    button.classList = 'color';
    if (i === 0) {
      button.value = 'black';
      button.style.backgroundColor = 'black';
      button.classList.add('selected');
    } else {
      button.value = cores[i];
      button.style.backgroundColor = cores[i];
    }
    button.type = 'button';
    escolhas.appendChild(button);
  }
}

function criarPixel() {
  const linha = document.querySelectorAll('.linha');
  for (let i = 0; i < linha.length; i += 1) {
    for (let coluna = 1; coluna <= 5; coluna += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = i+''+coluna;
      linha[i].appendChild(pixel);
    }
  }
}

function selecaoCor() {
  let paleta = document.getElementById('color-palette');
  paleta.addEventListener('click', function (button) {
    const elementoClasse = button.target.classList;
    if (elementoClasse[0] === 'color') {
      const elemento = document.getElementsByClassName('selected');
      elemento[0].classList.remove('selected');
      elementoClasse.add('selected');
      const selecao = document.getElementsByClassName('selected');
      cor = selecao[0].style.backgroundColor;
      return cor;
    }
  });
}

function pintar() {
let linha = document.getElementById('pixel-board');
linha.addEventListener('click', function(div){
    let ponto = document.getElementById(div.target.id);
    ponto.style.background = cor;
  });
}

criarCores();
criarBotoes();
criarPixel();
selecaoCor();
pintar();
