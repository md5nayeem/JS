var photos = ["Image/img1.jpg", "Image/img2.jpg", "Image/img3.jpg"];

var imgTag = document.querySelector("img")

var count = 0;

function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}

function prev() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos;
    } else {
        imgTag.src = photos[count];
    }
}

var x = document.querySelector("p");
x.remove