const backrounds =[
    "backrounds/1.png",
    "backrounds/2.png",
    "backrounds/3.png",
    "backrounds/4.png",
    "backrounds/5.png",
];

const interval = 2000;

let current = 0;

const backround = document.getElementById("backround");

backround.style.backgroundImage =
  `url("${backgrounds[current]}")`;

setInterval(() => {
   current++;

   if (current >= backrounds.length) {
    current = 0;
   }

   backround.style.backgroundImage = 
     `url("${backgrounds[current]}")`;

}, interval);