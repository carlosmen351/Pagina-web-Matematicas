const lista = [
  100,
  200,
  300,
  500,
];

function calcularPromedio (listaUsuario) {
  /* let sumaLista = 0;
  for (let i = 0; i < listaUsuario.length; i++) {
  sumaLista = sumaLista + listaUsuario[i];
  } */

  const sumaLista = listaUsuario.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  )
  const promedioLista = sumaLista / listaUsuario.length;
  return promedioLista;
}


