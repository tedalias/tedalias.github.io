const my_heading = document.querySelector("h1")
my_heading.textContent =  "Hello World!"

alert("Yay!!!!!!")

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "pics/1.jpg") {
        myImage.setAttribute("src", "pics/2.jpg")
    } else {
        myImage.setAttribute("src", "pics/1.jpg")
    }
}

let userButton = document.querySelector("button")

function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem('name', myName);
    my_heading.textContent = "Helloo " + myName
}

userButton.onclick = setUserName