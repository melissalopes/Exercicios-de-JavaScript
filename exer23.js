let numeros = [33, 70, 8, 45, 32, 6, 0, 89, 15, 93, 5, 3];
let mediaAritmetica;
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
};

mediaAritmetica = soma / numeros.length;

console.log("A média é de: " + mediaAritmetica);
