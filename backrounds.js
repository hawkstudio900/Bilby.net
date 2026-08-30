const backgrounds = [
    "../backrounds/1.png",
    "../backrounds/2.png",
    "../backrounds/3.png",
    "../backrounds/4.png",
    "../backrounds/5.png"
];

const interval = 2000;

let current = 0;

const background = document.getElementById("background");

background.style.backgroundImage =
    `url("${backrounds[current]}")`;

setInterval(() => {
    current++;

    if (current >= backgrounds.length) {
        current = 0;
    }

    background.style.backgroundImage =
        `url("${backrounds[current]}")`;

}, interval);