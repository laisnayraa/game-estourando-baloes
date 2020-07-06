var timerId = null; //Variável que armazena a chamada da função contagemTempo (timeout)

function iniciaJogo(){
    var url = window.location.search;
    var nivelJogo = url.replace("?", "")
    var tempoSegundos = 0;

    if (nivelJogo == 1){ // Nível 1 - Fácil = 120s
        tempoSegundos = 120;
    }
    if (nivelJogo == 2){ // Nível 2 - Normal = 60s
        tempoSegundos = 60;
    }
    if (nivelJogo == 3){ // Nível 3 - Difícil = 30s
        tempoSegundos = 30;
    }

    contagemTempo(tempoSegundos + 1);

    // Inserindo segundos no span
    document.getElementById('cronometro').innerHTML = tempoSegundos;

    // Quantidade de balões inteiros
    var quantBaloesInteiros = 30;
    criaBaloes(quantBaloesInteiros);

    // Imprimir quantidade de balões inteiros
    document.getElementById('baloesInteiros').innerHTML = quantBaloesInteiros;

    // Quantidade de balões estourados


    // Imprimir quantidade de balões estourados
    document.getElementById('baloesEstourados').innerHTML = 0;

}

function contagemTempo(segundos){
    segundos = segundos - 1;
    if(segundos == -1){
        clearTimeout(timerId); //Pára a execução da função do setTimeOut
        gameOver();
        return false;
    }    
    document.getElementById('cronometro').innerHTML = segundos;
    timerId = setTimeout("contagemTempo("+segundos+")", 1000)
}

function gameOver(){
    alert('Fim de jogo, você perdeu!');
}

function criaBaloes(quantBaloesInteiros){
    for(var i = 1; i<=quantBaloesInteiros; i++){
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';

        document.getElementById('cenario').appendChild(balao);
    }
}