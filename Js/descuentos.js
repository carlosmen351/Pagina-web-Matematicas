const cupones = [
"Referido",
"Amigo",
  "Super-amigo"
];
/* const precioOriginal = 120;
const descuento = 18; */
function calcularPrecioDescuento (precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeConDescuento) / 100;
  return precioConDescuento;
};
//console.log("El pago con descuento es de " + precioConDescuento + " pesos");
function priceDescount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;//Tener cuidado con el elemento value ya que si se escribe con mayuscula se pierde la formula
  const inputCupon = document.getElementById("inputCupon");
  const cuponValue = inputCupon.value;
  if (!cupones.includes(cuponValue)) {
    alert("El cupón " + cuponValue + " no es válido");
  } else if (cuponValue === "Referido") {
    descuento = 10;
  } else if (cuponValue === "Amigo") {
    descuento = 20;
  } else if (cuponValue === "Super-amigo") {
    descuento = 30;
  }
  /* let descuento;
  switch(cuponValue) {
    case "Referido":
      descuento = 10;
      break;
    case "Amigo":
      descuento = 20;
      break;
    case "Super-amigo":
      descuento = 30;
  } */
  const precioConDescuento = calcularPrecioDescuento(priceValue, descuento);
  const resultP = document.getElementById("resultP");
  resultP.innerText = " El resultado del precio con descuento es $" + precioConDescuento;
}