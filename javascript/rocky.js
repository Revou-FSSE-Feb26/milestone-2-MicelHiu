const computerHand = document.querySelector(".computer");
const playerHand = document.querySelector(".player");
const finalComputerScore = document.querySelector(".computerPoints");
const finalPlayerScore = document.querySelector(".playerPoints");
const buttons = document.querySelectorAll(".options-buttons button");
let result = document.querySelector(".result h2");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return "draw";
    } else if (
        (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function updateHands(player, computer) {
    playerHand.src = `../../images/rocky/${player}Player.png`;
    computerHand.src = `../../images/rocky/${computer}Computer.png`;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();

        playerHand.classList.add("shake");
        computerHand.classList.add("shake");

        setTimeout(() => {
            playerHand.classList.remove("shake");
            computerHand.classList.remove("shake");
            //ubah gambar
            updateHands(playerChoice, computerChoice);

            //cek pemenang
            const winner = getWinner(playerChoice, computerChoice);
            if (winner === "player") {
                playerScore++;
                result.textContent = "Player wins !";
            } else if (winner === "computer") {
                computerScore++;
                result.textContent = "Computer wins!";
            } else {
                result.textContent = "It's a DRAW !";
            }

            //update score
            finalPlayerScore.textContent = playerScore;
            finalComputerScore.textContent = computerScore;

            //cek game selesai
            if (playerScore === 3 || computerScore === 3) {
                setTimeout(() => {
                    alert (playerScore === 3 ? "You Win!" : "Computer Wins!");
                    playerScore = 0;
                    computerScore = 0;
                    finalComputerScore.textContent = 0;
                    finalPlayerScore.textContent = 0;
                }, 200);
            }
        }, 1000);
    });
});