var word = ["b", "o", "o", "t", "c", "a", "m", "p"];
var letters = ["a", "b", "c", "d", "e", "f", "g",]
var button = document.getElementById("btn");
var keys = document.querySelector(".keyboard");

function start() {
    // excute timer function
for (var i = 0; i < letters.length; i++) {
    var board = document.createElement("button");
    board.textContent = letters[i]
    board.value = letters[i]
    board.onclick = check
    keys.append(board);
}

    timer();
    // Excute blanks function
    blanks();
    check();
}

function timer() {
    // count down setInterval
    // from 60sec, 60000 milisec
    // when zero, game end, display score
}

function blanks() {
    // blanks appear when game starts
}

function check(event) {
    // event.preventDefault
    // if/else - event.target (console.log)
event.target
console.log(event.target)
console.log(event.target.value)
}
button.addEventListener("click", start)
