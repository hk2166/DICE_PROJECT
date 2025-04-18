function rollDice() {
  // Add rolling animation class
  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");
  dice1.classList.add("rolling");
  dice2.classList.add("rolling");

  // Remove animation class after animation completes
  setTimeout(() => {
    dice1.classList.remove("rolling");
    dice2.classList.remove("rolling");
  }, 1000);

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
  var randomDiceImage = "dice" + randomNumber1 + ".png"; 
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomDiceImage);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

  // If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } 
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } 
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

// Add click event listener to the roll button
document.querySelector(".roll-button").addEventListener("click", rollDice);

// Initial roll when page loads
rollDice();
