// for (var x = 0; x < 3; x++) {
//     document.querySelectorAll(".btn")[x].addEventListener("click", function () {
//         var text = this.innerHTML;

//         audioPlay(text);
//         playAnimation(text);
//     });
// }

// function audioPlay(text) {
//     switch (text) {
//         case "a":
//             var audio = new Audio('Audio/yt1s.com - Maher Zain  Allahi Allah Kiya Karo  Vocals Only Lyrics.mp3');
//             audio.play();
//             break;

//         case "t":
//             var audio = new Audio('Audio/yt1s.com - Tasbih  Ayisha Abdul Basith.mp3');
//             audio.play();
//             break;

//         case "b":
//             var audio = new Audio('Audio/yt1s.com - Mesut Kurtis  Burdah Maula ya Salli Official video  مسعود كرتس البردة مولاي صل وسلم.mp3');
//             audio.play();
//             break;
//     }
// }

// document.addEventListener("keypress", function (event) {
//     var text = event.key;
//     audioPlay(text);
//     playAnimation(text);
// })

// function playAnimation(text) {
//     var x = document.querySelector("." + text);
//     x.classList.add("anim")

//     setTimeout(function () {
//         x.classList.remove("anim")
//     }, 1000);
// }

//


var count = 0;
document.querySelector("textarea").addEventListener("keypress", function (event) {
    count++;
    var text = event.key;
    document.querySelector("h1").innerHTML = "You Have Pressed = " + count
})


