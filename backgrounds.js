const backgrounds = [
    "backgrounds/1.png",
    "backgrounds/2.png",
    "backgrounds/3.png",
    "backgrounds/4.png",
    "backgrounds/5.png"
];

const interval = 2000;

let current = 0;

const background = document.querySelector(".background");

background.style.backgroundImage = `url("${backgrounds[current]}")`;

setInterval(() => {
    background.style.opacity = 0;

    setTimeout(() => {
        current++;

        if (current >= backgrounds.length) {
            current = 0;
        }

        background.style.backgroundImage = `url("${backgrounds[current]}")`;
        background.style.opacity = 1;
    }, 1000);
}, interval);