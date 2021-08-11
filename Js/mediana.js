function calcularPromedio (listaUsuario) {
  const sumaLista = listaUsuario.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  )
  const promedioLista = sumaLista / listaUsuario.length;
  return promedioLista;
}
const lista = [
  500,
  8,
  1256,
  24,
  12589
]
function calcularMediana (lista) {
  const listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });
  console.log(listaOrdenada);
  const mitadLista = parseInt(listaOrdenada.length / 2);
  let mediana;
  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];
    const promedio1Y2 = calcularPromedio([elemento1, elemento2]);
    mediana = promedio1Y2;
    return mediana;
  }else {
    mediana = listaOrdenada[mitadLista];
    return mediana;
  };
};
function esPar (numero) {
  if (numero % 2 === 0) {
    return true;
  }else {
    return false;
  }
};