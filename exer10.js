let hoje = new Date();

const diaDaSemana = hoje.getDay() + 1;

switch(diaDaSemana){
    case 1:
        console.log("Fim de semana");
        break;
    case 2: case 3: case 4: case 5: case 6:
        console.log("É dia útil");
        break;
    case 7:
        console.log("Fim de semana");
        break;
    default:
        console.log("Dia inválido")
}
    