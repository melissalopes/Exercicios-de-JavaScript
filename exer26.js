let vetorValoresNumericos = [ 1, 2, 3, 4, 5 ]

function retornaNovoVetor(vetor, numInteiro = 0){
    let novoVetor = []
    let valor

    for(i in vetor){
        valor = vetor[i] * numInteiro
        novoVetor.push(valor)
    }
    
    console.log(novoVetor)
    return novoVetor;
}

function multiplicaValores(vetor, numInteiro = 0){
    let novoVetor = []
    let valor
    
    for(i in vetor){
        if( vetor[i] > 5){
            valor = vetor[i] * numInteiro
            novoVetor.push(valor)
        }  
    }
    
    console.log(novoVetor)
}

let valor = retornaNovoVetor(vetorValoresNumericos, 2)
multiplicaValores(valor, 2)