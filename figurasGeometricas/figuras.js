//codigo del cuadrado
console.group("cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd();

//codigo del triangulo 
console.group("triangulos");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
function areaTriangulo(base, altura){
    return (base * altura)/ 2;
}
console.groupEnd();

//codigo del círculos 
console.group("círculos");

function radioCirculo (radio) {
    return radio;
}
function diametroCirculo (radio){
    return radio * 2;
}
const PI = Math.PI ;
console.log("PI es: " + PI );

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI; 
}
console.groupEnd();

//aqui interactuamos con el HTML  


//cuadrado
function Calcular(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    const resultado = document.getElementById("resultado2");
    resultado.innerHTML = perimetro + " cm";
    
}

function Calcular2(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = area + " cm^2";
}


//triangulo

function Calcular3(){
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const l1= Number(input1.value);
    const l2 = Number(input2.value);
    const b = Number(input3.value);

    const perimetro = perimetroTriangulo(l1 , l2 , b);
    const resultado = document.getElementById("resultado3");
    resultado.innerHTML = perimetro + " cm";

}

function Calcular4(){
    const input3 = document.getElementById("base");
    const input4 = document.getElementById("altura");
    const b = input3.value;
    const a = input4.value;
    
    const area = areaTriangulo(b ,a);
    const resultado = document.getElementById("resultado4");
    resultado.innerHTML = area + " cm^2";
} 

//circulos 

function Calcular5(){
    const input = document.getElementById("radio");
    const r = input.value;
    
    const diametro = diametroCirculo(r);
    const resultado = document.getElementById("resultado5");
    resultado.innerHTML = diametro + " cm";
} 
function Calcular6(){
    const input = document.getElementById("radio");
    const r = input.value;
    
    const perimetro = perimetroCirculo(r);
    const resultado = document.getElementById("resultado6");
    resultado.innerHTML = perimetro + " cm";
} 
function Calcular7(){
    const input = document.getElementById("radio");
    const r = input.value;
    
    const area = areaCirculo(r);
    const resultado = document.getElementById("resultado7");
    resultado.innerHTML = area + " cm^2";
    
} 
 


