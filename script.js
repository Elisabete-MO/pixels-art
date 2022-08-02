let visualizar = document.getElementById('visualizar');
let escolhas = document.getElementById('color-palette');
let cores = [], cor;

function criarcores(){
    for (let i = 0; i < 4; i += 1){
      cor = 'rgb('+ (Math.random() * 256)+ ',' + (Math.random() * 256) + ',' + (Math.random() * 256) + ')';
      cores.push(cor);
    }
}

function criarbotoes(){
    for (let i = 0; i < 4; i += 1){
        let button = document.createElement('button'); 
        button.value = cores[i];
        button.type = 'button';
        button.style.backgroundColor = cores[i];
        button.className = 'color';
     //   button.addEventListener('click', handler(button));
        escolhas.appendChild(button);
    }
}

criarcores();
criarbotoes()