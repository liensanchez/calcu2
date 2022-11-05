//4 variables q se cambian segun la operacion elegida
let suma = false, resta = false, multiplicacion = false, division = false


//pre array q va a armar el numero para luego calcularlo
let preArray =[]
//array donde se van a guardar los numeros para el calculo
let array = []

//botones numericos, c/u tiene su valor que se agrega a preArray para luego unirlos con join asi 2, 9, 0 → 290
document.getElementById('cero').onclick = function () {
  let valorTecla = 0
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('uno').onclick = function () {
  let valorTecla = 1
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('dos').onclick = function () {
  let valorTecla = 2
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('tres').onclick = function () {
  let valorTecla = 3
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('cuatro').onclick = function () {
  let valorTecla = 4
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('cinco').onclick = function () {
  let valorTecla = 5
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('seis').onclick = function () {
  let valorTecla = 6
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('siete').onclick = function () {
  let valorTecla = 7
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('ocho').onclick = function () {
  let valorTecla = 8
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
}
document.getElementById('nueve').onclick = function () {
  let valorTecla = 9
  preArray.push(parseInt(valorTecla))
  let myVisor = document.getElementById('subVisor')
  let newNumero = document.createElement('p')
  newNumero.innerHTML = valorTecla;
  myVisor.appendChild(newNumero)
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

//los botones de operacion son los encargados de mostrar el numero a operar 


//chequeamos cual es la opcion seleccionada
document.getElementById('igual').onclick = function(){
  let numeroSegundo = preArray.join('')
  array.push(parseInt(numeroSegundo))
  preArray=[]
  let resultado = 'a'
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
}