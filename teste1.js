//ordenacao do conteudo dentro do array

let vetorInteiros = [-1, 67, 18, 9, 33, 91, 20, 15, -48]
let vetorString = ['João', 'Maria', 'Allana', 'Rubens', 'Gabriel', 'Helena']

console.log(vetorInteiros)
console.log(vetorString)

vetorInteiros.sort((a, b) => a - b)
vetorString.sort()

console.log(vetorInteiros)
console.log(vetorString)

//arrow function

const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3))

const subtracao = (a, b) => a - b;

console.log(subtracao(5, 3))

//for in 

let numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for(n in numerosInteiros){
    console.log(n)
    //trás os índices, não os valores
}

const pessoa = {
    nome: "Ana",
    peso: 67,
    idade: 29
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
