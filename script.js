var board = document.getElementById('board');
var racers = document.getElementsByClassName('racer');
var boostButton = document.getElementById('boost-button');
var leftDriver1 = 0;
var leftDriver2 = 0;
var leftDriver3 = 0;
var leftDriver4 = 0;

// get a random number between 0 and 20
function getRandomNumber() {
    return Math.floor(Math.random() * 21);
}

board.addEventListener("click", function() {
    leftDriver1 += getRandomNumber();
    leftDriver2 += getRandomNumber();
    leftDriver3 += getRandomNumber();
    leftDriver4 += getRandomNumber();
    racers[0].style.left = leftDriver1 + "px";
    racers[1].style.left = leftDriver2 + "px";
    racers[2].style.left = leftDriver3 + "px";
    racers[3].style.left = leftDriver4 + "px";
});

boostButton.addEventListener("click", function(e) {
    e.stopPropagation();
    leftDriver1 += 20;
    racers[0].style.left = leftDriver1 + "px";
});
