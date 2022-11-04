//4 variables q se cambian segun la operacion elegida
let suma = false, resta = false, multiplicacion = false, division = false


//array donde se van a guardar los numeros para el calculo
let array = []


//los botones van a agregar los numeros al array para las operaciones y van a cambiar a true la operacion que se quiera realzar
document.getElementById('suma').onclick = function (){
  let numeroSuma = document.getElementById('ingresoNum').value;
  array.push(parseInt(numeroSuma))
  suma = true
}
document.getElementById('resta').onclick = function () {
  let numeroResta = document.getElementById('ingresoNum').value
  array.push(parseInt(numeroResta))
  resta = true
}
document.getElementById('multiplicacion').onclick = function () {
  let numeroMultiplicacion = document.getElementById('ingresoNum').value
  array.push(parseInt(numeroMultiplicacion))
  multiplicacion = true
}
document.getElementById('division').onclick = function () {
  let numeroDivision = document.getElementById('ingresoNum').value
  array.push(parseInt(numeroDivision))
  division = true
}


//chequeamos 
document.getElementById('igual').onclick = function(){
  let numeroSegundo = document.getElementById('ingresoNum').value
  array.push(parseInt(numeroSegundo))

  if(suma == true){
    array.reduce((primero, segundo) => {
      console.log(primero + segundo)
    })
  }else if (resta == true){
    array.reduce((primero, segundo) => {
      console.log(primero - segundo)
    })
  }else if (multiplicacion == true){
    array.reduce((primero, segundo) => {
      console.log(primero * segundo)
    })
  }else if (division == true){
    array.reduce((primero, segundo) => {
      console.log(primero / segundo)
    })
  }
}