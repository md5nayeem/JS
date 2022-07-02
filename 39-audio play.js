// for (var x = 0; x < 3; x++) {
//     document.querySelectorAll(".my-Button")[x].addEventListener("click", function () {
//         var text = this.innerHTML;
//         audioplay(text);
//     });
// }


// function audioplay(text){

//     switch (text) {
//         case "AVA MAX":
//             var audio = new Audio('Audio/Alan Walker _ Ava Max .mp3');
//             audio.play();


//         case "HAWSHA":
//             var audio = new Audio('Audio/Hawsa.mp3');
//             audio.play();

//             case "ELLIE":
//             var audio = new Audio('Audio/ELLIE.mp3');
//             audio.play();
//     }
// }


for (var x = 0; x < 3; x++) {
    document.querySelectorAll(".my-Button")[x].addEventListener("click", function () {
        var text = this.innerHTML;
        switch (text) {
            case "AVA MAX":
                var audio = new Audio('Audio/Alan Walker _ Ava Max .mp3');
                audio.play();
                break;

            case "HAWSHA":
                var audio = new Audio('Audio/Hawsa.mp3');
                audio.play();
                break;

            case "ELLIE":
                var audio = new Audio('Audio/Ellie.mp3');
                audio.play();

        }

    });
}





