//her definerer jeg de forskellige variabler, de kan godt skiftes ud, og så duer 'formlen' stadig//
let længde = 30;
let bredde = 25;
let areal = længde * bredde;
let resultat;

// her påbegynder jeg en 'if'-sætning, er arealet mindre end 100, skal der i konsollen stå nedenstående tekst//
if (areal < 100) {
  resultat = "Arealet er for lille";
  // her siger jeg at hvis arealet er mindre end 200 så er det ok, og det skrives i konsollen, såfremt det er opfyldt//
} else if (areal < 200) {
  resultat = "Arealet er OK";

  /*her siger jeg at hvis ingen af ovenstående betingelser er opfyldt, (mindre end 100, eller
mindre end 200) så skal der konsol logges at arealet er for stort*/
} else {
  resultat = "Arealet er for stort";
}
console.log(resultat);
