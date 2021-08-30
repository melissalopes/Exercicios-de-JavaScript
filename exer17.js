function calculaMediaPonderada(codigo, notaUm, notaDois, notaTres){
    let media 
    let pesoNota = 4 + 3 + 3

    media = ((notaUm * 1) + (notaDois * 2) + (notaTres * 3)) / pesoNota

    if(media >= 5){
        console.log(`Código do aluno: ${codigo}. Notas: ${notaUm}, ${notaDois}, ${notaTres}. Conceito: Aprovado.`)
    }else{
        console.log(`Código do aluno: ${codigo}. Notas: ${notaUm}, ${notaDois}, ${notaTres}. Conceito: Reprovado.`)
    }
}

calculaMediaPonderada(1, 10, 10, 10)