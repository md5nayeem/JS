// document.querySelector("button").addEventListener("click", function(){
//     alert("HEllo");
// });


document.querySelector("button").addEventListener("click", myFunction);

function myFunction() {
    alert("HI");
}

var myVar = document.querySelector("#heading");
myVar.addEventListener("mouseover", function () {
    myVar.classList.add("my-Style");
});

