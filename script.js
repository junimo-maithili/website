//variables for products
let pads = 0;
let tampons = 0;
let cups = 0;
let underwear = 0;
let result

//allows html buttons to be edited here
const button_1a = document.getElementById("button_1a");
const button_1b = document.getElementById("button_1b");
const button_2a = document.getElementById("button_2a");
const button_2b = document.getElementById("button_2b");
const button_3a = document.getElementById("button_3a");
const button_3b = document.getElementById("button_3b");
const button_4a = document.getElementById("button_4a");
const button_4b = document.getElementById("button_4b");
const button_5a = document.getElementById("button_5a");
const button_5b = document.getElementById("button_5b");

document.getElementById("button_1a").onclick = function() {cup_underwear()};
document.getElementById("button_1b").onclick = function() {pads_tampons()};

document.getElementById("button_2a").onclick = function() {cup_underwear()};
document.getElementById("button_2b").onclick = function() {pads_tampons()};

document.getElementById("button_3a").onclick = function() {pads_underwear()};
document.getElementById("button_3b").onclick = function() {cup_tampons()};

document.getElementById("button_4a").onclick = function() {pads_underwear()};
document.getElementById("button_4b").onclick = function() {cup_tampons()};

document.getElementById("button_5a").onclick = function() {cup_underwear()};
document.getElementById("button_5b").onclick = function() {pads_tampons()};


document.getElementById("submit").onclick = function() {results()};


function pads_tampons() {
  pads+=1
  tampons+=1
}

function cup_underwear() {
    cups+=1
    underwear+=1
  }

function pads_underwear() {
    pads+=1
    underwear+=1
  }

function cup_tampons() {  
    tampons+=1
    cups+=1
  }

function results(){

  

  if (pads >= tampons && pads>= underwear && pads>= cups){
    result = "Sanitary Pads"
    document.getElementById("result").innerHTML = "Your choice of period product is " + result;

  }
  if (tampons >= pads && tampons>= underwear && tampons>= cups) {
    result = "Tampons"
    document.getElementById("result").innerHTML = "Your choice of period product is " + result;
  } 
  if (cups >= pads && cups>= tampons && cups>= underwear){
    result = "Menustration Cups"
    document.getElementById("result").innerHTML = "Your choice of period product is " + result;
  }
  if (underwear >= pads && underwear>= tampons && underwear>= cups){
    result = "Period Underwear"
    document.getElementById("result").innerHTML = "Your choice of period product is " + result;
  }  
}