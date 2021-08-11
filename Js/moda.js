const lista = [1,2,5,4,8,9,6,3,2,5,8,7,4,1,2,5,8,7,4,6,3,2,9,8,7,5,7,5,1,4,2,6,8,7,5,4,2,1,2,5];

function calcularModa (lista) {
  const listaCount = {};
  lista.map(
    function (elemento) {
      if(listaCount[elemento]){
        listaCount[elemento] += 1;
      }else {
      listaCount[elemento] =1
      }
    }
  );
  const listaArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
      return valorAcumulado[1] - nuevoValor[1];
    }
  );
  const listaArray2 = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
      return valorAcumulado[0] - nuevoValor[0];
    }
  );
  const moda = listaArray[listaArray.length - 1];
  return moda;
}
