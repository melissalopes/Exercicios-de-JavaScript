let vetorA = [ 'a', 'b', 'c', 'd', 'e']
let vetorB = [ 1, 2, 3, 4, 5 ]

function trocaValoresDosVetores(vetorA, vetorB){
    let tamanhoVetor = 5
    
    for(let i = 0; i < tamanhoVetor; i++){
        vetorA.push(vetorB[i])
        vetorB.push(vetorA[i])
    }

    for(let i = 0; i < tamanhoVetor; i++){
        vetorA.shift()
        vetorB.shift()
    }
    
}

trocaValoresDosVetores(vetorA, vetorB)

console.log("Vetor A: " + vetorA)
console.log("Vetor B: " + vetorB)