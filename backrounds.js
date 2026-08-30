const backgrounds = [
    "backgrounds/1.png",
    "backgrounds/2.png",
    "backgrounds/3.png",
    "backgrounds/4.png",
    "backgrounds/5.png"
];

const interval = 2000;

let current = 0;

const background = document.querySelector(".backround");

background.style.backgroundImage =
    `url("${backgrounds[current]}")`;

setInterval(() => {

    backround.style.opacity = 0;

    setTimeout(() => {

        current++;

        if (current >= backrounds.length) {
            current = 0;
        }

        backround.style.backgroundImage =
            `url("${backrounds[current]}")`;

        backround.style.opacity = 1;

    }, 1000);

}, interval);