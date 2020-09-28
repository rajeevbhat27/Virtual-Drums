buttonList = document.querySelectorAll(".drum");
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        let letter = this.innerHTML;
        playAudio(letter);



    });
}

document.addEventListener("keydown", function (event) {
    playAudio(event.key);
});

function playAudio(letter) {
    switch (letter) {
        case 'w':
            audio = new Audio("./sounds/".concat("tom-1.mp3"));
            audio.play();
            break;
        case 'a':
            audio = new Audio("./sounds/".concat("tom-2.mp3"));
            audio.play();
            break;
        case 's':
            audio = new Audio("./sounds/".concat("tom-3.mp3"));
            audio.play();
            break;
        case 'd':
            audio = new Audio("./sounds/".concat("tom-4.mp3"));
            audio.play();
            break;
        case 'j':
            audio = new Audio("./sounds/".concat("snare.mp3"));
            audio.play();
            break;
        case 'k':
            audio = new Audio("./sounds/".concat("crash.mp3"));
            audio.play();
            break;
        case 'l':
            audio = new Audio("./sounds/".concat("kick-bass.mp3"));
            audio.play();
            break;

    }
}