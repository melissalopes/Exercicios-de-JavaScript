let vetorProgressaoAritmetica = []
let vetorProgressaoGeometrica = []

function progressaoAritmetica(qtdTermos, primeiroTermo, razao){
    let soma = primeiroTermo

    vetorProgressaoAritmetica.push(primeiroTermo)

    for(let i = 1; i < qtdTermos; i++){
        soma += razao
        vetorProgressaoAritmetica.push(soma)
    }

    return vetorProgressaoAritmetica
}

function progressaoGeometrica(qtdTermos, primeiroTermo, razao){
    let soma = primeiroTermo

    vetorProgressaoGeometrica.push(primeiroTermo)

    for(let i = 1; i < qtdTermos; i++){
        soma *= razao
        vetorProgressaoGeometrica.push(soma)
    }

    return vetorProgressaoGeometrica
}

console.log(progressaoAritmetica(4, 1, 3))
console.log(progressaoGeometrica(4, 2, 3))
