function calculaAumento(salarioAtual, planoDeTrabalho){
    let novoSalario;

    switch(planoDeTrabalho){
        case 'A':
            novoSalario = (salarioAtual * 0.1) + salarioAtual;
            console.log(novoSalario);
            break;
        case 'B':
            novoSalario = (salarioAtual * 0.15) + salarioAtual;
            console.log(novoSalario);
            break;
        case 'C':
            novoSalario = (salarioAtual * 0.2) + salarioAtual;
            console.log(novoSalario);
            break;
        default:
            console.log("O plano de trabalho é inválido.")
    }
}

calculaAumento(3000, "C");
