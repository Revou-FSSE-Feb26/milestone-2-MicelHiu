const start = document.querySelector(".btnStart");
const rulesSection = document.querySelector(".rules");
const clickySection = document.querySelector(".clicky");

let timeLeft = 30;
let timerInterval;
let isGameRunning = false;

let score = 0;
let dotTimeout;

clickySection.style.display = "none";

document.addEventListener("keydown", function(event) {
    if(event.key === "Escape") {
        stopGame();
        rulesSection.style.display = "block";
        clickySection.style.display = "none";
    }
});

start.addEventListener("click", async function() {
    rulesSection.style.display = "none";
    clickySection.style.display = "block";

    await startCountdown();
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startCountdown() {
    const countdown = document.querySelector(".countdown");

    for(let i = 3; i > 0; i--) {
        countdown.textContent = i;
        await delay(1000);
    }

    countdown.textContent = "GO!";
    await delay(500);
    countdown.textContent = "";

    startGame();
}

function startGame() {
    score = 0;
    document.querySelector(".score").textContent = score;

    startTimer();
    spawnDot();
}

function startTimer() {
    const timer = document.querySelector(".timer");

    isGameRunning = true;
    timeLeft = 30;
    timer.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;

        if(timeLeft === 0) {
            stopGame();
        }
    }, 1000);
}

let currentDot = null;

function spawnDot() {
    if(!isGameRunning) return;
    clearTimeout(dotTimeout);

    //buat dot
    const dot = document.createElement("div");
    dot.classList.add("dot");

    //pastiin posisi random
    const arena = document.querySelector(".arena");

    if(currentDot) currentDot.remove();
    const arenaRect = arena.getBoundingClientRect();

    const x = Math.random() * (arenaRect.width - 50);
    const y = Math.random() * (arenaRect.height - 50);

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    arena.appendChild(dot);
    currentDot = dot;

    dot.addEventListener("click", () => {
        score++;
        document.querySelector(".score").textContent = score;
        spawnDot();
    });

    dotTimeout = setTimeout(() => {
        dot.remove();
        spawnDot();
    }, 1000);
}

function stopGame() {
    if (!isGameRunning) return;

    clearInterval(timerInterval);
    clearTimeout(dotTimeout);

    isGameRunning = false;

    document.querySelectorAll(".dot").forEach(dot => dot.remove());

    alert(`Your score: ${score}`);

    rulesSection.style.display = "block";
    clickySection.style.display = "none";
}



