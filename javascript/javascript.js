// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll2

window.onscroll = function() {
  myFunction()
};

let i = 0;
let txt = 'Donna Marie Hayward was the best friend of Laura Palmer, and after her death she was obsessed with finding out who killed her and why, employing the help of James Hurley and Maddy Ferguson.';
//let speed = 250;

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 || i < txt.length) {
    document.getElementById("myP").className = "donna";
    document.getElementById("textDonna").style.display = "block";
    document.getElementById("textDonna").innerHTML += txt.charAt(i);
    i++;
    //setTimeout(myFunction, speed);
  } else {
    document.getElementById("myP").className = "";
    document.getElementById("textDonna").style.display = "none";
  }
}
