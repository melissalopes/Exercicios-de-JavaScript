function valorEmDinheiro(valor){
    console.log("R$" + valor.toFixed(2).replace(".", ","))
}

valorEmDinheiro(0.1 + 0.2)