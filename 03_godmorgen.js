/* for at kunne løse denne opgave, skal jeg bruge en if-sætning, med flere muligheder, og 
samtidig bruge en funktion der har styr på tiden*/

let time = new Date().getHours();

/* sig godnat mellem 00 og 5 */
if (time < 5) {
  console.log("godnat");
} else if (time < 10) {
  /* sig godmorgen mellem kl 5 og kl 10 */
  console.log("godmorgen");
} else if (time < 18) {
  /* sig goddag mellem kl 10 og 18*/
  console.log("goddag");
} else {
  /* sig godaften mellem 18 og 00*/
  console.log("godaften");
}
