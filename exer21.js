let numerosInteiros = [1, 2, 23, 4, -3, 5, 15, 7, 8, 9, 10, 11, 12];
let maiorNum = numerosInteiros[0];
let menorNum = numerosInteiros[0];
let auxiliar;

for(let i = 0; i < numerosInteiros.length; i++){
    auxiliar = numerosInteiros[i];

    if(auxiliar > maiorNum){
        maiorNum = auxiliar;
    }

    if(auxiliar < menorNum){
        menorNum = auxiliar;
    }

}

console.log("Maior número dentro do vetor: " + maiorNum)
console.log("Menor número dentro do vetor: " + menorNum)