/*Function to generate RANDOM NUMBER b/w 1 to 6 for dice1 a */
var randomNumber1, randomNumber2;
function dice1RandomNumber() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;

  /*Images of dice1 changes*/
  document
    .querySelector(".img1")
    .setAttribute("src", `images/dice${randomNumber1}.png`);
}

//RANDOM NUMBER generation b/w 1 to 6 for dice1
function dice2RandomNumber() {
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  // Images of dice1 changes
  document.querySelector(".img2").setAttribute("src", randomImageSource2);
}

// Adding Event Listener to dice1 and dice2
var button = document.querySelector(".btn");
button.addEventListener("click", dice1RandomNumber);
button.addEventListener("click", dice2RandomNumber);
button.addEventListener("click", compare);

function compare() {
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
  }
}
