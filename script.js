var board = document.getElementById('board');
var racers = document.getElementsByClassName('racer');
var racersLeft = [ 0, 0, 0, 0 ];

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

board.addEventListener("click", function() {
    for (var i = 0; i < racersLeft.length; i++) {
        racersLeft[i] += getRandomNumber(21);
        racers[i].style.left = racersLeft[i] + "px";
    }
});

document.getElementById('boost-button').addEventListener("click", function(e) {
    console.log("clicked on button!");
    e.stopPropagation();
    racersLeft[0] += 20;
    racers[0].style.left = racersLeft[0] + "px";
});

document.addEventListener("keydown", function(evt) {
    console.log(evt);
    if (evt.keyCode === 82) {
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        console.log(randomColor);
        board.style.backgroundColor = randomColor;
    }
});












































//
//
//
// var board = document.getElementById('board');
// var racers = document.getElementsByClassName('racer');
// var boostButton = document.getElementById('boost-button');
// var leftRacingCar = 0;
// var leftMotorbike = 0;
// var leftPoliceCar = 0;
// var leftTractor = 0;
//
// // get a random number between 0 and 20
// function getRandomNumber(num) {
//     return Math.floor(Math.random() * num);
// }
//
// document.addEventListener("click", function() {
//     leftRacingCar += getRandomNumber(21);
//     leftMotorbike += getRandomNumber(21);
//     leftPoliceCar += getRandomNumber(21);
//     leftTractor += getRandomNumber(21);
//     racers[0].style.left = leftRacingCar + "px";
//     racers[1].style.left = leftMotorbike + "px";
//     racers[2].style.left = leftPoliceCar + "px";
//     racers[3].style.left = leftTractor + "px";
// });
//
// boostButton.addEventListener("click", function(e) {
//     e.stopPropagation();
//     leftRacingCar += 20;
//     racers[0].style.left = leftRacingCar + "px";
// });
//
// document.addEventListener("keypress", function(evt) {
//     console.log(evt.keyCode);
//     if (evt.keyCode === 32) {
//         board.style.backgroundColor = "rgb(" + getRandomNumber(256) + "," + getRandomNumber(256) + "," + getRandomNumber(256) + ")";
//     }
// });
