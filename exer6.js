let stringDePontos = ["10", "20", "20", "8", "25", "3", "5", "30", "1"];
let resultado = []

function comparaResultadoDosJogos(pontos){
    let pontuacaoTemp = []
    let maiorPontuacao = pontos[0];
    let menorPontuacao = pontos[0];
    let registroDeRecordes = 0;
    let piorJogo = [];
    let auxiliar;

    for(let i = 0; i < pontos.length; i++){
        pontuacaoTemp.push(parseInt(pontos[i]))
    }

    for(let i = 0; i < pontuacaoTemp.length; i++){
        auxiliar = pontuacaoTemp[i];

        if(auxiliar > maiorPontuacao){
            maiorPontuacao = auxiliar;
            registroDeRecordes++;
        }
    
        if(auxiliar < menorPontuacao){
            menorPontuacao = auxiliar;
            piorJogo[0] = pontuacaoTemp.indexOf(menorPontuacao) 
        }
    }
    
    return resultado = [registroDeRecordes, piorJogo[0]]
}

console.log(comparaResultadoDosJogos(stringDePontos))