"use strict";

// Calculator to calculate BMI
// BMI = weight / (height * height)

//Prompt user for length
const length = prompt("What is your length in centimeters?");
//Prompt user for weight
const weight = prompt("What is your weight in kilograms?");
//Calculate BMI
const BMI = weight / ((length / 100) * (length / 100));

//Print BMI
console.log(`Your BMI is ${BMI.toFixed(2)}.`);
