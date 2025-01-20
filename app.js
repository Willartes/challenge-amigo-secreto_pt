//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];
let listaDeNumeroSorteado = [];
let valorMaximo = 10;
let numeroAleatorio = gerarNumeroAleatorio();


function adicionarAmigo(){
    let nomeDoAmigo = document.getElementById('amigo');
    let nomeAmigo = nomeDoAmigo.value;

    if(nomeAmigo == '' || listaDeNomes.includes(nomeAmigo)){
        validarEntrada();
    }else{
        listaDeNomes.push(nomeAmigo);
        limparCampo();
        exibirNome();
    }
}

function limparCampo(){
    let nomeDoAmigo = document.getElementById('amigo');
    nomeDoAmigo.value = '';
}

function limparLista(){
    listaDeNomes.length = 0;
    document.getElementById('amigo').innerHTML = '';    
}


function gerarNumeroAleatorio(){
    let numeroSorteado = gerarNumero();
    
    if(listaDeNumeroSorteado.length == listaDeNomes.length){
        listaDeNumeroSorteado = [];
    }
    do {

        numeroSorteado = gerarNumero();

    } while (listaDeNumeroSorteado.includes(numeroSorteado));
    
    listaDeNumeroSorteado.push(numeroSorteado);
    return numeroSorteado;
}

function gerarNumero(){
    if(listaDeNomes.length == 0){
        gerarNumero();
    }else{
        valorMaximo = listaDeNomes.length;
        let numeroSorteado = parseInt(Math.random()*valorMaximo);
        return numeroSorteado;
    }
}

function sortearAmigo(){
    let numeroAleatorio = gerarNumeroAleatorio();
    let resultadoDoNomeSorteado = document.getElementById('resultado');
    let nomeSorteado = listaDeNomes[numeroAleatorio];     
    listaDeNomes.splice(numeroAleatorio, 1);
    resultadoDoNomeSorteado.innerHTML = `O amigo sorteado é: <li>${nomeSorteado}</li>`;
}

function validarEntrada(){
    let nomeDoAmigo = document.getElementById('amigo');
    let nomeAmigo = nomeDoAmigo.value;
    if(nomeAmigo == '' || listaDeNomes.length == 0){
        alert('Por favor, insira um nome válido!');
    }
    if(listaDeNomes.includes(nomeAmigo)){
        alert(`O nome "${nomeAmigo}" já foi adicionado!`);
    }
}

function exibirNome(){
    let nomeDoAmigo = document.getElementById('listaAmigos');  
    let nomeDoAmigoHTML = listaDeNomes.map(nomeDoAmigo => `<li>${nomeDoAmigo}</li>`).join('');
    nomeDoAmigo.innerHTML = nomeDoAmigoHTML;
}

