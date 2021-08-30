function retornaNumerosImpares(inicio = 0, fim = 100){
    let maior = fim
    let menor = inicio

    if(inicio > fim){
        maior = inicio
        menor = fim
    }

    for(let i = menor ; i < maior ; i++){
        if( !(i % 2 == 0) ){
            console.log(i)
        }
    }

}

retornaNumerosImpares(0, 11)