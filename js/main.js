

var minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    var meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'img/pinscher.png') {
        minhaImagem.setAttribute('src', 'img/pinscherkiss.png');
    } else {
        minhaImagem.setAttribute ('src', 'img/pinscher.png');
    }
}

/* var botao = document.querySelector('button');
var cabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    var meuNome = prompt('por faor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    cabecalho.textContent = 'Boas vindas, ' + meuNome;
}
if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
}else {
    var nomeGuardado = localStorage.getItem('nome');
    cabecalho.textContent = 'Boas vindas, ' + nomeGuardado;
}

botao.onclick = function() {
    defineNomeUsuario();
} 
*/