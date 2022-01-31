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
  let a = areal(længde, bredde);
  let resultat;
  if (isNaN(a)) {
    resultat = "Det er ikke et tal, prøv igen!";
  } else if (a <= 0) {
    resultat = "Arealet er lig med, eller mindre end 0, prøv igen!";
  } else {
    resultat = `Arealet er ${a}`;
  }
  console.log(resultat);
}

function areal(l, b) {
  return l * b;
}
