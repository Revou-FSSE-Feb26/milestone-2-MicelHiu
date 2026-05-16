// Perpindahan dari rules ke numbie
const startButton = document.querySelector(".btnStart");
const rulesSection = document.querySelector(".rules");
const numbieSection = document.querySelector(".numbie");

numbieSection.classList.add("hidden");

startButton.addEventListener("click", function() {
    rulesSection.classList.add("hidden");
    numbieSection.classList.remove("hidden");
});

// NUMBIE WUMBIE
// load variabel yang dibutuhkan
const btnCheck = document.querySelector(".btnCheck");
const result = document.querySelectorAll(".result-container p");
let randomNumber = Math.floor(Math.random() * 100) + 1;
const attemptsEl = document.querySelector(".attempts");
let attempts = Number(attemptsEl.textContent);
const soundWin = new Audio("../audio/win.mp3");
const soundLose = new Audio("../audio/lose.mp3");

// fungsi untuk reset game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    attemptsEl.textContent = attempts;
    result[0].textContent = "";
    result[1].textContent = "";
    document.getElementById("input-answer").value = "";
}

// event listener untuk tombol check
btnCheck.addEventListener("click", function() {
    const playerAnswer = Number(document.getElementById("input-answer").value); 
    // pengecekan input valid atau tidak
    if (!playerAnswer || playerAnswer < 1 || playerAnswer > 100) {
        result[0].textContent = `Your answer = ${playerAnswer}`;
        result[1].textContent = "Between 1 and 100 fellas. Read the rules again please";
        return;
    }

    // pengecekan jawaban
    switch(true) {
        case playerAnswer > randomNumber:
            result[0].textContent = `Your answer = ${playerAnswer}`;
            result[1].textContent = "Too high there fellas, keep it down please";
            attempts--;
            attemptsEl.textContent = attempts;
            break;
        case playerAnswer < randomNumber:
            result[0].textContent = `Your answer = ${playerAnswer}`;
            result[1].textContent = "Too low, what are you doing down there ?";
            attempts--;
            attemptsEl.textContent = attempts;
            break;
        case playerAnswer === randomNumber:
            result[0].textContent = `Your answer = ${playerAnswer}`;
            result[1].textContent = "You got it! Congratulations !";
            soundWin.play();
            alert("You beat the game! Congratulations !");
            resetGame();
            return;
            break;
    }

    // pengecekan attempts/nyawa habis atau tidak
    if(attempts === 0) {
        soundLose.play();
        alert(`Game Over! Try again fellas, the number was ${randomNumber}`);
        resetGame();
    }
    
    document.getElementById("input-answer").value = "";
})