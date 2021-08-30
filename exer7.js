function sistemaDeNotas(nota){
    let modulo

    if(nota >= 0 && nota < 38){
        console.log(`Nota: ${nota}. Conceito: Reprovado`)
    }else{
        modulo = nota % 5
        
        if(modulo === 2){
            nota += 3
            console.log(`Nota Arredondada: ${nota}. Conceito: Aprovado`)
        }else if(modulo === 3){
            nota += 2
            console.log(`Nota Arredondada: ${nota}. Conceito: Aprovado`)
        }else if(modulo === 4){
            nota += 1
            console.log(`Nota Arredondada: ${nota}. Conceito: Aprovado`)
        }else{
            console.log(`Nota: ${nota}. Conceito: Aprovado`)
        }
    }
}

sistemaDeNotas(53)