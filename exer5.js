//considere que as unidades de medida de tempo são iguais
function jurosSimples(capital, taxa, tempo){
    let taxaEmDecimal = taxa / 100;
    let montante = capital + (capital * taxaEmDecimal * tempo);
    return montante.toFixed(2);
}

function jurosCompostos(capital, taxa, tempo){
    let taxaEmDecimal = taxa / 100;
    let montante = capital * Math.pow((1 + taxaEmDecimal), tempo);
    return montante.toFixed(2) ;
}

console.log("Montante sob juros simples: " + jurosSimples(10000, 10, 3))
console.log("Montante sob juros compostos: " + jurosCompostos(10000, 10, 3))