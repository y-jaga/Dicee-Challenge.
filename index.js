/*RANDOM NUMBER generation b/w 1 to 6 for dice1 */

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1 + 1;

/*Images of dice1 changes*/
document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);

/*RANDOM NUMBER generation b/w 1 to 6 for dice1 */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImageSource2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
}
