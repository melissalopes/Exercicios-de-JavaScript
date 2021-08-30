let numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let qtdPares = 0;
let qtdImpares = 0;

for(let i = 0; i < numerosInteiros.length; i++){
    if(numerosInteiros[i] % 2 === 0){
        qtdPares++;
    }else{
        qtdImpares++;
    }
}

console.log("Quantidade de números pares: " + qtdPares)
console.log("Quantidade de números ímpares: " + qtdImpares)