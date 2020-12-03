var randomNumber1=Math.floor(Math.random()*6)+1;
var newSource1="images/dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",newSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var newSource2="images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",newSource2);


if(randomNumber1>randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="🎁 Player 1 Won";
}

else if(randomNumber1<randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="Player 2 Won 🎁";
}
else{
  document.getElementsByTagName("h1")[0].innerHTML="🎁 Draw 🎁";
}
