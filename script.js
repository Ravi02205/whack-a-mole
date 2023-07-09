let square = [...document.getElementsByClassName("square")];
let mole = document.getElementsByClassName("mole");
let result = document.getElementById("score");
let highResult = document.getElementById("high-score");
let timeLeft = document.getElementById("time-left");
let start = document.getElementById("start-btn");

let score = 0;
let highScore = 0;
let moleId;
let moleTimer;
let TimerId;
let totalTime = 10;

let clearMole = () => {
    square.forEach(element => {
        element.classList.remove('mole');
    });
}
let moveMole = () => {
   clearMole();
    let randomElement = square[Math.round(Math.random() * (square.length - 1))];
    randomElement.classList.add("mole");
    moleId = randomElement.id;
}

let startCounter = () => {
    totalTime--;
    timeLeft.textContent = "Time Left : " + totalTime;
    if (totalTime == 0) {
        clearInterval(moleTimer);
        clearInterval(TimerId);
        alert("GAME OVER, your score is " + score);
        highScore = (highScore < score) ? score : highScore;
        highResult.textContent = "High Score : " + highScore;
        start.disabled = false;
        clearMole();
    }
}

let startGame = () => {
    score = 0;
    totalTime = 10;
    start.disabled = true;
    moleTimer = setInterval(moveMole, 500);
    TimerId = setInterval(startCounter, 1000);
}

square.forEach(element => {
    element.addEventListener("mousedown", () => {
        if (element.id == moleId) {
            score++;
            result.textContent = "Result : " + score;
            moleId = null;
        }
    })
});

start.addEventListener('click', startGame);