function triangulo(a, b, c){

    if (a == b && b == c){
        console.log("Triângulo Equilátero");
    }else if(a == b || b == c || a == c){
        console.log("Triângulo Isósceles");
    }else{
        console.log("Triângulo Escaleno");
    }
}

triangulo(2, 2, 2)
triangulo(2, 2, 5)
triangulo(2, 10, 5)