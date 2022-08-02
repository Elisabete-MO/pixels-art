let visualizar = document.getElementById('visualizar');
const escolhas = document.getElementById('color-palette');
const cores = [];
let cor;

function criarcores() {
  let random = [];
  for (let i = 0; i < 4; i += 1) {
    for(let j = 0; j < 3; j += 1) {
        random[j] = (Math.random() * 256);
    }
    cor = 'rgb(' + (random[0]) + ',' + (random[1]) + ',' + (random[2]) + ')';
    cores.push(cor);
  }
}

function criarbotoes() {
  for (let i = 0; i < 4; i += 1) {
    let button = document.createElement('button');
    if (i === 0){
        button.value = 'black';
        button.style.backgroundColor = 'black';
    } else {
        button.value = cores[i];
        button.style.backgroundColor = cores[i];
    }
    button.type = 'button';
    button.className = 'color';
    escolhas.appendChild(button);
  }
}

criarcores();
criarbotoes();
