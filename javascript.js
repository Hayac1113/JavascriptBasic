"use strict";

const huidigJaar = prompt("Welk jaar is het nu?");
const naam = prompt("Hoe heet je?");
const geboorteJaar = prompt("Wat is je geboortejaar?");

const leeftijd = huidigJaar - geboorteJaar;

console.log(
  `Beste ${naam}, eind ${huidigJaar} zal je leeftijd ${leeftijd} zijn.`
);
