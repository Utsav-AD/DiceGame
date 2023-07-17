var randomnum= Math.floor(Math.random() * 6) + 1;

var randomimg= "dice"+randomnum+".png";

var randomimgsrc= "images/"+randomimg;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimgsrc);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomimgsrc2="images/dice"+randomnum2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgsrc2);


if (randomnum>randomnum2){
    document.querySelector("h1").innerHTML="🚩 player 1 won";
}
else if (randomnum2>randomnum){
    document.querySelector("h1").innerHTML="player 2 won 🚩";
}
else {
    document.querySelector("h1").innerHTML="Drawww🚩🚩🚩🚩";
}