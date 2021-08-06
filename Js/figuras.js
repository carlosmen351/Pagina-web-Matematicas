/* Inicio del codigo del cuadrado */
function perimetroCuadrado (lado) {
  return lado * 4
};
function areaCuadrado (lado) {
  return lado * lado;
};

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado")
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
};
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado")
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
};
/* Fin del codigo del cuadrado */
/* Inicio del codigo del Triangulo */
function perimetroTriangulo (lado1, lado2, base) {
  return (lado1 + lado2) + base;
};
function areaTriangulo (base, altura) {
  return (base * altura) / 2;
};

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputLado1")
  const input2 = document.getElementById("inputLado2")
  const input3 = document.getElementById("inputBase")
  const valueLado1 = Number(input1.value);
  const valueLado2 = Number(input2.value);
  const valueBase = Number(input3.value);
  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
};
function calcularAreaTriangulo() {
  const input1 = document.getElementById("inputBase")
  const input2 = document.getElementById("inputAltura")
  const valueBase = Number(input1.value);
  const valueAltura = Number(input2.value);
  const altura = areaTriangulo(valueBase, valueAltura);
  alert(altura);
};
/* Fin del codigo del triangulo */
/* Inicio del codigo del circulo */
function diametroCirculo (radio) {
  return radio * 2;
};

function areaCirculo (radio) {
  const PI =3.1415;
  return (radio * radio) * PI;
};

function circunferenciaCirculo (radio) {
  const PI =3.1415;
  const diametro = diametroCirculo(radio);
  return diametro * PI;
};

function calcularDiametroCirculo() {
  const input = document.getElementById("inputCirculo")
  const value = Number (input.value);
  const diametro = diametroCirculo(value);
  alert(diametro);
};
function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo")
  const value = Number (input.value);
  const area = areaCirculo(value);
  alert(area);
};
function calcularCircunferenciaCirculo() {
  const input = document.getElementById("inputCirculo")
  const value = Number (input.value);
  const circunferencia = circunferenciaCirculo(value);
  alert(circunferencia);
};
/* Fin del codigo del circulo */

/* RETO */
function altura(lado1, lado2, base){
  if(lado1 === lado2 && lado1 != base){
      alert('isoceles')
      const altura = Math.sqrt(lado1**2 - base**2/ 4)
      console.log(altura)
  }
  else{
      alert('no lo se')
  }
}


