//carousel
const container = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");

let currentIndex = 0;

updateCarousel();

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 16;

    container.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;

    cards.forEach((card, i) => {
        if(i === currentIndex) {
            card.style.transform = "scale(1.05)";
            card.style.opacity = "1";
        } else {
            card.style.transform = "scale(0.9)";
            card.style.opacity = "0.5";
        }
    });

    btnLeft.disabled = currentIndex === 0;
    btnRight.disabled = currentIndex === cards.length - 1;
}

btnLeft.addEventListener("click", () => {
    if(currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

btnRight.addEventListener("click", () => {
    if(currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});


//cards interaction
const rocky = document.querySelector("#rocky");
const numbie = document.querySelector("#numbie");
const clicky = document.querySelector("#clicky");

rocky.addEventListener("click", () => {
    window.location.href = "pages/rocky.html"
});

numbie.addEventListener("click", () => {
    window.location.href = "pages/numbie.html"
});

clicky.addEventListener("click", () => {
    window.location.href = "pages/clicky.html"
});


//form
const form = document.querySelector(".feedback-form");
let allFeedback = [];
form.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if(!button) return;

    switch(button.type) {
        case "submit":
            alert("Feedback successfully sent, thank you !");
            break;

        case "reset":
            form.reset();
            alert("Oops! reset success.");
            break;
    }
})

document.getElementById("year").textContent = new Date().getFullYear();