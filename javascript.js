const INITIAL_MAX_MIN_BOOM = 35;
const INITIAL_INCREMENT = 5;




const counterElement = document.getElementById("counter");
const incrementButtonElement = document.getElementById("increment");
const decrementButtonElement = document.getElementById("decrement");
const boomElement = document.getElementById("boom");
counterElement.innerText = 0;
const counterInputElement = document.getElementById("changeCounter");
const max_min_boom_input = document.getElementById("changeMaxMin");

counterInputElement.value = localStorage.getItem("counter") || INITIAL_INCREMENT;
max_min_boom_input.value = localStorage.getItem("maxBoom")  || INITIAL_MAX_MIN_BOOM;


const increment = () => {
    let maxBoom = Number(max_min_boom_input.value);
    counterElement.innerText = Number(counterElement.innerText) + Number(counterInputElement.value);

    if(counterElement.innerText > maxBoom) {
        boomElement.innerText = "BOOM";
    }

    else if(counterElement.innerText >= - maxBoom) {
        boomElement.innerText = "";
    }
}

const decrement = () => {
    let maxBoom = Number(max_min_boom_input.value);
    counterElement.innerText = Number(counterElement.innerText) - Number(counterInputElement.value);

    
    if(counterElement.innerText < - maxBoom) {
        boomElement.innerText = "BOOM";
    }
    
    else if(counterElement.innerText <= maxBoom) {
        boomElement.innerText = "";
    }
}



incrementButtonElement.onclick = increment;
decrementButtonElement.onclick = decrement;

counterInputElement.onchange = () => {
    localStorage.setItem("counter", Number(counterInputElement.value));
}

max_min_boom_input.onchange = () => {
    localStorage.setItem("maxBoom", Number(max_min_boom_input.value));
}