let numeros = [1, 12, 13, 70, 10, 45, 32, 6, 0, 89, 15, 93, 5, 3];
let numDentroDoIntervalo = 0;
let numForaDoIntervalo = 0;

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] >= 10 && numeros[i] <= 20){
        numDentroDoIntervalo++;
    }else{
        numForaDoIntervalo++;
    }
    
};

console.log(numDentroDoIntervalo);
console.log(numForaDoIntervalo);