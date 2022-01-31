/* her definerer jeg de forskellige variabler
let længde = 31;
let bredde = 25;
let areal = længde * bredde;
her bruger jeg template litterals til at sammensætte teksten med variablerne
let resultat = `Længden er ${længde} meter og bredden er ${bredde} meter. Arealet er ${areal}`;
console.log(resultat); */

document.querySelector("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  let længde = document.querySelector("#længde").value;
  let bredde = document.querySelector("#bredde").value;
  let areal = længde * bredde;
  let resultat = `Længden er ${længde} meter og bredden er ${bredde} meter. Arealet er ${areal}`;
  console.log(resultat);
}
