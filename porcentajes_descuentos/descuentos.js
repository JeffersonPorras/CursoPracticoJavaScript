

const inputPrice = document.getElementById("inputPrice");
const inputDiscount = document.getElementById("inputDiscount")
const resultPrice = document.getElementById("resultPrice");
const coupon = document.getElementById("inputCoupon");

let priceValue = 0
let discountValue = 0
let precioConDescuento = 0


function calcularPrecioConDescuento (precio, descuento,){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;  

    if (precioConDescuento){
        return (precioConDescuento)

    }else {
        alert("Por favor ingresar un valor antes de calcular")
    }
}

function settearValores(){
    priceValue = inputPrice.value;    
    discountValue = inputDiscount.value;  
   Math.ro
}

function calcularDiscount(){
    settearValores()
 
    precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es : $" + precioConDescuento;
    
    
}
const valorCupon = function (){
    
    const valorCupon = coupon.value;    
   

    if (valorCupon === "Exito" ){
        descuento = 15;
    }else if (valorCupon === "Jumbo"){
        descuento = 30;
    }else if (valorCupon === "Olimpica"){
        descuento = 25;
    }else {
        alert("cupon no válido");
    }
    
    
    return descuento;  
  
}

/**
 * calcula cupon
 */
function calcularCoupon(){
    
    settearValores()
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);    
    resultPrice.innerText = "El precio con descuento es : $" + precioConDescuento;   
    const precioConDescuentoCupon = precioConDescuento - valorCupon();
    
    const resultTotal = document.getElementById("resultTotal");
    resultTotal.innerText = `El descuento mas cupon es de : ${precioConDescuentoCupon}`

}



