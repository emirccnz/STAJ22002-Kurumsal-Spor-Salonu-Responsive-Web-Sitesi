const slider = document.getElementById("coach-slider");
const cards = Array.from(slider.children);

let left = 0;
let active = 1;
let right = 2;

function nextSlide() {

    cards[left].className = "card hidden-right";

    cards[active].className = "card left z-1";

    cards[right].className = "card active z-2";

    const newRight = (right + 1) % cards.length;
    cards[newRight].className = "card right z-1";

    left = active;
    active = right;
    right = newRight;
}

setInterval(nextSlide, 3000);