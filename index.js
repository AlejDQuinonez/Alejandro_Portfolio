//This page is written completely in vanilla javascript
//Landing-Page h1 animation sequence
const text = document.querySelector(".animate-text");
const stringText = text.textContent;
const splitText = stringText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let character = 0;
let timer = setInterval(onTick, 150);

function onTick() {
    const span = text.querySelectorAll("span")[character];
    span.classList.add("fade");
    character++;
    if(character === splitText.length){
        complete();
        buttonFadeIn();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

//button fading in after h1 animation sequence
function buttonFadeIn() {
    var i = 0;
    var fadeButton = document.getElementById("button");
    var fadeIn = setInterval(function() {
        if (i >= 10) {
            clearInterval(fadeIn);
        } else {
            fadeButton.style.opacity = i / 10;
            i++;
        }
    }, 150);
}

//page fade out after button is clicked
// function fadeOutEffect() {
//     var fadeTarget = document.getElementById("target");
//     var fadeEffect = setInterval(function() {
//         if (!fadeTarget.style.opacity){
//             fadeTarget.style.opacity = 1;
//         } else if (fadeTarget.style.opacity > 0) {
//             fadeTarget.style.opacity -= 0.1;
//         } else {
//             clearInterval(fadeEffect);
//         }
//     }, 50);
// }
// document.getElementById("button").addEventListener("click", fadeOutEffect);


