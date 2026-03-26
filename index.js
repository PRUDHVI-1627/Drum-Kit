const keyMap = {
    w: "keyW", a: "keyA", s: "keyS", d: "keyD",
    j: "keyJ", k: "keyK", l: "keyL"
};

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("sounds/snare.mp3").play();
            break;

        case "k":
            new Audio("sounds/crash.mp3").play();
            break;

        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;

        default:
            console.log("key pressed:", key);
    }
}

function animateButton(btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.classList.add("pressed");

    setTimeout(() => {
        btn.classList.remove("pressed");
    }, 150);
}

// Click events
document.querySelectorAll(".drum").forEach(btn => {
    btn.addEventListener("click", function () {
        const key = this.id.replace("key", "").toLowerCase();
        makeSound(key);
        animateButton(this.id);
    });
});

// Keyboard events
document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    makeSound(key);

    if (keyMap[key]) {
        animateButton(keyMap[key]);
    }
});