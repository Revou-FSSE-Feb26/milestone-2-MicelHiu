const btnCheck = document.querySelector(".btnCheck");
const result = document.querySelectorAll(".result-container p");
let randomNumber = Math.floor(Math.random() * 100) + 1;
const attemptsEl = document.querySelector(".attempts");
let attempts = Number(attemptsEl.textContent);


// testing for winning
// result[0].textContent = randomNumber;

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    attemptsEl.textContent = attempts;
    result[0].textContent = "";
    result[1].textContent = "";
    document.getElementById("input-answer").value = "";
}

btnCheck.addEventListener("click", function() {
    const playerAnswer = Number(document.getElementById("input-answer").value); 

    if (!playerAnswer || playerAnswer < 1 || playerAnswer > 100) {
        result[0].textContent = `Your answer = ${playerAnswer}`;
        result[1].textContent = "Between 1 and 100 fellas. Read the rules again please";
        attempts--;
        attemptsEl.textContent = attempts;
        return;
    }

    if (playerAnswer > randomNumber) {
        result[0].textContent = `Your answer = ${playerAnswer}`;
        result[1].textContent = "Too high there fellas, keep it down please";
        attempts--;
        attemptsEl.textContent = attempts;
    } else {
        result[0].textContent = `Your answer = ${playerAnswer}`;
        result[1].textContent = "Too low, what are you doing down there ?";
        attempts--;
        attemptsEl.textContent = attempts;
    }

    if (playerAnswer === randomNumber) {
        alert("You beat the game! Congratulations !");
        resetGame();
        return;
    }

    if(attempts === 0) {
        alert(`Game Over! Try again fellas, the number was ${randomNumber}`);
        resetGame();
        return;
    } 
})