for (var x = 0; x < 3; x++) {
    document.querySelectorAll(".my-Button")[x].addEventListener("click", function () {
        var text = this.innerHTML;
        audioplay(text);
        playAnimation(text);
    });
}


function audioplay(text) {

    switch (text) {
        case "a":
            var audio = new Audio('Audio/Alan Walker _ Ava Max .mp3');
            audio.play();
            break;

        case "b":
            var audio = new Audio('Audio/Hawsa.mp3');
            audio.play();
            break;

        case "c":
            var audio = new Audio('Audio/ELLIE.mp3');
            audio.play();
            break;
    }
}


function playAnimation(text) {
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");


}