var link = document.getElementsByTagName("a")[0];
link.style.color = "red"
link.innerHTML = "STUDY WITH ANIS"
link.href = "https://www.youtube.com/watch?v=B3Q5X8r_ldw&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&index=34"

var heading3 = document.createElement("h1");
var text = document.createTextNode("this is heading3");
heading3.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("this is heading0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1);

var x = document.getElementById("my-div");
x.classList.add("myClass2")

var x = document.getElementById("my-div");
x.classList.remove("myClass2")