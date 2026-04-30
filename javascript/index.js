//carousel
const container = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
let currentIndex = 0;

updateArrow();

function updateSlide() {
    const cardWidth = cards[0].offsetWidth;
    container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth"
    });
}

function updateArrow() {
    btnLeft.disabled = currentIndex === 0;
    btnRight.disabled = currentIndex === cards.length - 1;
}

btnLeft.addEventListener("click", () => {
    if(currentIndex > 0) {
        currentIndex--;
        updateSlide();
        updateArrow();
    }
});

btnRight.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlide();
        updateArrow();
    }
})


//cards interaction
const rocky = document.querySelector("#rocky");
const numbie = document.querySelector("#numbie");
const clicky = document.querySelector("#clicky");

rocky.addEventListener("click", () => {
    window.location.href = "pages/rules/rocky.html"
});

numbie.addEventListener("click", () => {
    window.location.href = "pages/rules/numbie.html"
});

clicky.addEventListener("click", () => {
    window.location.href = "pages/rules/clicky.html"
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