// Perpindahan dari rules ke numbie
const startButton = document.querySelector(".btnStart");
const rulesSection = document.querySelector(".rules");
const numbieSection = document.querySelector(".numbie");

numbieSection.style.display = "none";

startButton.addEventListener("click", function() {
    rulesSection.style.display = "none";
    numbieSection.style.display = "block";
});

// NUMBIE WUMBIE
// load variabel yang dibutuhkan
const btnCheck = document.querySelector(".btnCheck");
const result = document.querySelectorAll(".result-container p");
let randomNumber = Math.floor(Math.random() * 100) + 1;
const attemptsEl = document.querySelector(".attempts");
let attempts = Number(attemptsEl.textContent);

/* testing for winning (shortcuts)
result[0].textContent = randomNumber; */

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
        attempts--;
        attemptsEl.textContent = attempts;
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
            alert("You beat the game! Congratulations !");
            resetGame();
            return;
            break;
    }

    // pengecekan attempts/nyawa habis atau tidak
    if(attempts === 0) {
        alert(`Game Over! Try again fellas, the number was ${randomNumber}`);
        resetGame();
    } 
})