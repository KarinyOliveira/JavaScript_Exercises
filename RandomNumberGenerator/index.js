// RANDOM NUMBER GENERATOR

/*
const MIN = 50;
const MAX = 100;

//let randomNum = Math.random();
//let randomNum = Math.random() * 6;
let randomNum = Math.floor(Math.random() * (MAX - MIN)) + MIN;

console.log(randomNum);
*/

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const MIN = 1;
const MAX = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * MAX) + MIN;
    randomNum2 = Math.floor(Math.random() * MAX) + MIN;
    randomNum3 = Math.floor(Math.random() * MAX) + MIN;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}