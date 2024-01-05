"use strict";

// const huidigJaar = prompt("Welk jaar is het nu?");
// const naam = prompt("Hoe heet je?");
// const geboorteJaar = prompt("Wat is je geboortejaar?");

// const leeftijd = huidigJaar - geboorteJaar;

// console.log(
//   `Beste ${naam}, eind ${huidigJaar} zal je leeftijd ${leeftijd} zijn.`
// );

//Applicatie om verkoopprijs te berekenen

//Input inkooptarief van gebruiker
const inkooptarief = parseFloat(prompt("Wat is het inkooptarief?"));

//Input winstmarge in percentage van gebruiker
const winstmarge = parseFloat(prompt("Wat is de winstmarge in percentage?"));

//Bereken verkoopprijs excl. BTW
const verkoopprijsExclBtw = inkooptarief * (1 + winstmarge / 100);
console.log(`De verkoopprijs excl. BTW is ${verkoopprijsExclBtw}`);

//Input BTW percentage van gebruiker
const btwPercentage = prompt(
  "Wat is het BTW percentage? 1 voor Hoog, 2 voor Laag"
);
const BTW_HOOG = 21;
const BTW_LAAG = 9;

//initieer verkoopprijs incl. BTW
let verkoopprijsInclBtw;

//If statement om BTW percentage te bepalen
switch (btwPercentage) {
  case "1": //Keuze BTW hoog
    verkoopprijsInclBtw = verkoopprijsExclBtw * (1 + BTW_HOOG / 100);
    console.log(`De verkoopprijs incl. BTW is ${verkoopprijsInclBtw}`);
    break;
  case "2": //Keuze BTW laag
    verkoopprijsInclBtw = verkoopprijsExclBtw * (1 + BTW_LAAG / 100);
    console.log(`De verkoopprijs incl. BTW is ${verkoopprijsInclBtw}`);
    break;
  default:
    console.log("Ongeldige invoer");
    break;
}
