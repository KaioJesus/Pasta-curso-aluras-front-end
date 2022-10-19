function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}
/*function tocaSomPom() {
        document.querySelector('#som_tecla_pom').play();
    
        querySelector('') -> função que é capaz de buscar e trazer a referencia do elemento -> busca o primeiro elemento
        querySelectorAll -> Função que seleciona todos os elementos com aquele seletor passado, ou seja, os 9 botoes devem ter uma classe em comum 
    

    // document representa todo o html dentro do js

    
    
    // . (ponto) após a primeira função quer dizer que está entrando na função
    
} */

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento =  tecla.classList[1];
    const idAudio = `#som_${instrumento}` // template string
    
    // console.log(idAudio);

    tecla.onclick = function (){ // função anonima para chamar a função principal, já que se eu chamar a função principal direto, faria o que a função faz
        tocaSom(idAudio);
    };

    tecla.onkeydown =  function (evento){ // evento de apertar tecla
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    } // quando solta a tecla

    // console.log(contador);
}

// referencias são criadas com base no valor que vão receber e guardar, elas podem ser constantes ou variáveis, no nosso caso é constante e podemos criar com qualquer nome, mas um nome que faça sentido.

/*
document.querySelector('.tecla_pom').onclick = tocaSomPom;
 atribuindo a função ao onclick, não é preciso de parenteses

onclick -> atributo do html que quando apertar acontece algo
alert -> função que mostra pop up com mensagem

*/


/* Não é preciso repetir para cada, existem maneiras de fazer de formas automáticas e automatizadas para todos

"Imagine se tivéssemos um piano com 88 teclas"

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomPuff(){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomSplash(){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomToim(){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomPsh(){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTic(){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTom(){
    document.querySelector('#som_tecla_clap').play();
} */








