let operacoes = {
    soma : function (a, b){
        return a + b;
    },
    subtracao : function (a, b){
        return a - b;
    },
    multiplicacao : function (a, b){
        return a * b;
    },
    divisao : function (a, b){
        return a / b;
    },
    resto : function (a, b){
        return a % b;
    },
}       

console.log("Soma: " + operacoes.soma(5, 55))
console.log("Subtração: " + operacoes.subtracao(55, 5))
console.log("Multiplicação: " + operacoes.multiplicacao(5, 5))
console.log("Divisão: " + operacoes.divisao(55, 5))
console.log("Resto: " + operacoes.resto(5, 55))