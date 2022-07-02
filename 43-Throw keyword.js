document.querySelector("#btn").addEventListener("click", function () {
    var x = document.querySelector("#in").value
    console.log(x);

    try {
        if (x < 5) {
            throw "input is too low"
        } else if (x < 5) {
            throw "input is too high"
        }
    } catch (error) {
        console.log(error)
    }
})