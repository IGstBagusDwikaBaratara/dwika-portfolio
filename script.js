const texts = [
    "Basic Web Development",
    "Basic Database",
    "Communication",
    "Problem Solving",
    "Instalation Printer"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeWriter, speed);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        textElement.textContent =
            texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 50);
    } else {
        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        setTimeout(typeWriter, 500);
    }
}

typeWriter()

function hamburg() {
    const navbar = document.querySelector(".dropdown");

    navbar.style.transform = "translateY(0)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");

    navbar.style.transform = "translateY(-500px)";
}