let numeros = [1, -2, 23, 4, -5, 15, -7, 8, 9, -10, 11, 12];
let qtdNegativos = 0;

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] < 0){
        qtdNegativos++;
    }

}

console.log("Quantidade de números negativos: " + qtdNegativos)
