var randomVariable = Math.floor(Math.random()*6)+1;

var randomImageSource = "images/dice" + randomVariable + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomVariable2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomVariable2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomVariable>randomVariable2){
  document.querySelector("h1").innerHTML="Player 1 wins! 🚩";
}
else if(randomVariable<randomVariable2){
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
