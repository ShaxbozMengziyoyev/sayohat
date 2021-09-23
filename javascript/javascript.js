const firstSpeed = 5;
const secondSpeed = 10;
const thirdSpeed = 50;

var elForm = document.querySelector('.form-js');
var elInput = document.querySelector('.input-js');
var elButton = document.querySelector('.button-js');

var elFirstResult = document.querySelector('.result-piyoda');
var elSecondResult = document.querySelector('.result-velosepet');
var elThirdResult = document.querySelector('.result-mashina');

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var inputNum = parseInt(elInput.value.trim(), 10);

    var first = inputNum / firstSpeed;
    var second = inputNum / secondSpeed;
    var third = inputNum / thirdSpeed;

    elFirstResult.textContent = `Piyoda: ${first} soat`;
    elSecondResult.textContent = `Velosiped: ${second} soat`;
    elThirdResult.textContent = `Avtomobilda: ${third} soat`;
});