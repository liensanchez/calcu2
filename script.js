//4 variables q se cambian segun la operacion elegida
let suma = false, resta = false, multiplicacion = false, division = false


//pre array q va a armar el numero para luego calcularlo
let preArray =[]
//array donde se van a guardar los numeros para el calculo
let array = []


//funcion para el numero que agrega el valor de tecla en c/u de las teclas, tiene su valor que se agrega a preArray para luego unirlos con join asi 2, 9, 0 → 290
function numeroIngresado (valorTecla) {
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}

//botones numericos que pasan el parametro a la funcion de arriba 
document.getElementById('cero').onclick = function () {
  numeroIngresado(0)
}

document.getElementById('uno').onclick = function () {
  numeroIngresado (1)
}

document.getElementById('dos').onclick = function () {
  numeroIngresado (2)
}

document.getElementById('tres').onclick = function () {
  numeroIngresado (3)
}

document.getElementById('cuatro').onclick = function () {
  numeroIngresado (4)
}

document.getElementById('cinco').onclick = function () {
  numeroIngresado (5)
}

document.getElementById('seis').onclick = function () {
  numeroIngresado (6)
}

document.getElementById('siete').onclick = function () {
  numeroIngresado (7)
}

document.getElementById('ocho').onclick = function () {
  numeroIngresado (8)
}

document.getElementById('nueve').onclick = function () {
  numeroIngresado (9)
}


//los botones van a agregar los numeros al array para las operaciones y van a cambiar a true la operacion que se quiera realzar
document.getElementById('suma').onclick = function (){
  suma = true
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray=[]
  let valorTecla = '+'
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('resta').onclick = function () {
  resta = true
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray = []
  let valorTecla = '-'
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('multiplicacion').onclick = function () {
  multiplicacion = true
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray = []
  let valorTecla = '*'
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('division').onclick = function () {
  division = true 
  let numeroDividor = preArray.join('')
  array.push(parseInt(numeroDividor))
  preArray = []
  let valorTecla = '/'
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}


//chequeamos cual es la opcion seleccionada
document.getElementById('igual').onclick = function(){
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray=[]

  if(suma == true){
    array.reduce((primero, segundo) => {
      resultado = (primero + segundo)
    })
    suma = false
  }else if (resta == true){
    array.reduce((primero, segundo) => {
      resultado = (primero - segundo)
    })
    resta = false
  }else if (multiplicacion == true){
    array.reduce((primero, segundo) => {
      resultado = (primero * segundo)
    })
    multiplicacion = false
  }else if (division == true){
    array.reduce((primero, segundo) => {
      resultado = (primero / segundo)
    })
    division = false
  }
  array=[]

  let myVisor = document.getElementById('visor')
  let newNumero = document.createElement('h3')
  newNumero.innerHTML = resultado;
  myVisor.appendChild(newNumero)

  //eliminamos el numero ingresado
  let visor = document.getElementById('subVisor')
  parentNode.removeChild(visor)
}