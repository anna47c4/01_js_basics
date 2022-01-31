/* her sørger jeg for at knappen kan klikkes på, og så ryger den ned i funktionen*/
document.querySelector("button").addEventListener("click", buttonClicked);

/* her er funktionen der sørger for at der kan ske det vi vil have*/
function buttonClicked() {
  /* her bestemmer vi at vi vil have værdien, der er skrevet i input-feltet, til at være variablen 'brugernavn'*/
  let brugerNavn = document.querySelector("#navn").value;
  /* her udskriver vi en tekst, og værdien / brugernavnet, uanset hvilket navn det er*/
  console.log(`Tillykke dit navn er ${brugerNavn}`);
}
