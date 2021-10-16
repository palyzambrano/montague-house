var precioPorLetra = 5.0;
var total = 0.0;
var inputEl = document.querySelector('#texto');
var totalEl = document.querySelector('#total');
var letrasEl = document.querySelector('#letras');
var calcularEl = document.querySelector ('#calcular');

function calcularTotal() {
  var total = inputEl.value.length * precioPorLetra;

  totalEl.innerText = '$' + total;
}

function calcularLetras() {
  letrasEl.innerText = inputEl.value.length;
}

function calcular(eventoDeClick) {
  eventoDeClick.preventDefault();

  calcularLetras();
  calcularTotal();
}

calcularEl.addEventListener('click', calcular);
