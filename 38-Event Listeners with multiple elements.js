var len = document.querySelectorAll(".my-Button").length

for (var x = 0; x < len; x++) {
    document.querySelectorAll(".my-Button")[x].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    });
}

