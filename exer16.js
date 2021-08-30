function calculaValorPlanoDeSaude(idade){
    let valorASerPago = 0;

    if( idade >= 0 && idade <= 10 ){
        valorASerPago = 100 + 80;
        console.log("Valor a ser pago R$" + valorASerPago.toFixed(2).replace(".",","))
    }else if( idade <= 30 ){
        valorASerPago = 100 + 50;
        console.log("Valor a ser pago R$" + valorASerPago.toFixed(2).replace(".",","))
    }else if( idade <= 60 ){
        valorASerPago = 100 + 95;
        console.log("Valor a ser pago R$" + valorASerPago.toFixed(2).replace(".",","))
    }else{
        valorASerPago = 100 + 130;
        console.log("Valor a ser pago R$" + valorASerPago.toFixed(2).replace(".",","))
    }
}

calculaValorPlanoDeSaude(10);
