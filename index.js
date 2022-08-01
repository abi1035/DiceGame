var buttonClick=$("button")
// document.querySelector("button")

buttonClick.on("click", function () {
  // addEventListener

  // DICE 1
  var randomNumber1= Math.floor((Math.random()*6)+1);
  var randomDice1= "images/dice"+randomNumber1+".png";
  document.querySelectorAll("img")[0].setAttribute("src",randomDice1);

  // DICE 2
  var randomNumber2=Math.floor((Math.random()*6)+1);
  var randomDice2= "images/dice"+randomNumber2+".png";
  document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

  if (randomNumber1>randomNumber2) {
    document.querySelector("h1.result").textContent="🏅 Player 1 wins!"
  }
  else if(randomNumber2>randomNumber1) {
      document.querySelector("h1.result").textContent="Player 2 wins! 🏅"
  }
  else if(randomNumber1===randomNumber2) {
      document.querySelector("h1.result").textContent=" ⚔ Draw ⚔"
  }

})
