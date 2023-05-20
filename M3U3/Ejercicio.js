/*0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avion*/


function determinarTransporte(dist) {
  if (dist >= 0 && dist < 1000) {
    return "pie";
  } else if (dist >= 1000 && dist < 10000) {
    return "bicicleta";
  } else if (dist >= 10000 && dist < 30000) {
    return "colectivo";
  } else if (dist >= 30000 && dist < 100000) {
    return "auto";
  } else if (dist >= 100000) {
    return "avion";
  } else{
    return "Ingrese una distancia válida";
  }
};

function devolverMayor(array) {
  let max = 0;
  for (i = 0; i <= array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};

let distancia = 1;
console.log("Transporte determinado:", determinarTransporte(distancia));

let array = [1, 5, 6, 34, 6, 5, 8, 2, 23, 3];

console.log("El mayor numero es:", devolverMayor(array));




