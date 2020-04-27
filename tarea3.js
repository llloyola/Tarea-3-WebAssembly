lista = [3,5,8,9]

const generar = function (n) {
  lista = []
  for (i = 1; i <= n ; i++){
    lista.push(i);
  }
  return lista
}

/*https://stackoverflow.com/questions/37075180/combinations-of-size-n-from-an-array*/
function combine(array, length, max) {
  function c(l, r) {
      var ll = l.slice();
      if (r.length === length) {
        if (r.includes(max) == true){
          if (calcular(r).some(Repetidos) == false){
            result.push(calcular(r).sort());
            return;
          }
          
        }
      }
      while (ll.length) {
          c(ll, r.concat(ll.shift()));
      }
  }
  var result = [];
  c(array, []);
  return result;
}

function combine_2(array, length) {
  function c(l, r) {
      var ll = l.slice();
      if (r.length === length) {
          result.push(r);
          return;
      }
      while (ll.length) {
          c(ll, r.concat(ll.shift()));
      }
  }
  var result = [];
  c(array, []);
  for (elem in array){
    a = array[elem]
    result.push([a,a])

  }
  return result;
}


const calcular = function (lista) {
  result = []
  values = combine_2(lista, 2)
  for (elem in values){
    a = values[elem][0]
    b = values[elem][1]
    if (result.includes(a+b) || result.includes(a*b)){
      result = [0,0]
      return result
    }
    result.push(a+b)
    result.push(a*b)

  }
  return result
};


/* https://es.stackoverflow.com/questions/282378/como-saber-si-un-array-tiene-elementos-repetidos */
function Repetidos(valor, indice, lista) {
  return !(lista.indexOf(valor) === indice);
}

function final(n) {
  let initialTime = new Date();
  let i = n;
  let finish = 0;
  while (finish == 0) {
    let max = i;
    generados = generar(i);
    combinaciones = combine(generados,n, max);
    if (combinaciones.length ==0 ){
      i++;
    }
    else if(combinaciones.length != 0) {
      var element = document.getElementById('jsoutput');
      let endTime = new Date();
      let finalTime = endTime - initialTime;
      var primeraParte = combinaciones[0].slice(0, combinaciones[0].length/2);
      var segundaParte = combinaciones[0].slice(combinaciones[0].length/2,combinaciones[0].length);
      element.innerHTML =  "Tiempo de compilacion: " + finalTime + '</br>' + primeraParte + '</br>' + segundaParte;
      console.log(combinaciones[0])
      return combinaciones[0]
    }
  }
}

/*
console.log(calcular(lista));

console.log(dict.values())
console.log(dict.values().some(Repetidos))
*/