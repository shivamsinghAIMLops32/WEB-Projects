const purple = document.getElementById("card1");
const red = document.getElementById("card2");
const white = document.getElementById("card3");
const dark = document.getElementById("card4");
const btn = document.getElementById("button")

const body = document.querySelector("body");

purple.addEventListener("click", function() {
    body.style.backgroundColor = "purple";
});
red.addEventListener("click", function() {
    body.style.backgroundColor = "red";
});
white.addEventListener("click", function() {
    body.style.backgroundColor = "white";
});
dark.addEventListener("click", function() {
    body.style.backgroundColor = "black";
});