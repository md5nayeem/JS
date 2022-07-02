function add() {
    var x = document.querySelector("#paraId");
    // x.style.color = "white";
    // x.style.backgroundColor = "red";
    // x.style.display = "inline";
    // x.style.fontWeight = "bold";
    // x.style.fontSize = "10vh";
    x.classList.add("para-Style")
}

function remove() {
    var x = document.querySelector("#paraId");
    x.classList.remove("para-Style")
}