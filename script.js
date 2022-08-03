const cores = [];

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
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha[i].appendChild(pixel);
    }
  }
}

criarCores();
criarBotoes();
criarPixel();