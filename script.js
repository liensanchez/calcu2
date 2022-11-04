//4 variables q se cambian segun la operacion elegida
let suma = false, resta = false, multiplicacion = false, division = false


//pre array q va a armar el numero para luego calcularlo
let preArray =[]
//array donde se van a guardar los numeros para el calculo
let array = []

//botones numericos
document.getElementById('cero').onclick = function () {
  let valorTecla = 0
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('uno').onclick = function () {
  let valorTecla = 1
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('dos').onclick = function () {
  let valorTecla = 2
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('tres').onclick = function () {
  let valorTecla = 3
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('cuatro').onclick = function () {
  let valorTecla = 4
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('cinco').onclick = function () {
  let valorTecla = 5
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('seis').onclick = function () {
  let valorTecla = 6
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('siete').onclick = function () {
  let valorTecla = 7
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('ocho').onclick = function () {
  let valorTecla = 8
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}
document.getElementById('nueve').onclick = function () {
  let valorTecla = 9
  preArray.push(parseInt(valorTecla))
  console.log(preArray)
}


//los botones van a agregar los numeros al array para las operaciones y van a cambiar a true la operacion que se quiera realzar
document.getElementById('suma').onclick = function (){
  suma = true
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray=[]
  console.log(array)
}
document.getElementById('resta').onclick = function () {
  resta = true
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray = []
  console.log(array)
}
document.getElementById('multiplicacion').onclick = function () {
  multiplicacion = true
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray = []
}
document.getElementById('division').onclick = function () {
  division = true 
  let numeroDividor = preArray.join('')
  array.push(parseInt(numeroDividor))
  preArray = []
  
}


//chequeamos cual es la opcion seleccionada
document.getElementById('igual').onclick = function(){
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray=[]  
  if(suma == true){
    array.reduce((primero, segundo) => {
      console.log(primero + segundo)
    })
    suma = false
  }else if (resta == true){
    array.reduce((primero, segundo) => {
      console.log(primero - segundo)
    })
    resta = false
  }else if (multiplicacion == true){
    array.reduce((primero, segundo) => {
      console.log(primero * segundo)
    })
    multiplicacion = false
  }else if (division == true){
    array.reduce((primero, segundo) => {
      console.log(primero / segundo)
    })
    division = false
  }
  array=[]
}