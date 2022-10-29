let myImage = document.querySelector("img");

myImage.onclick = () => {
    const imgSrc = myImage.getAttribute("src");

    if (imgSrc === "images/firefox.png") {
        myImage.setAttribute("src", "images/hero.png");
    } else {
        myImage.setAttribute("src", "images/firefox.png");
    }
}; 


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function formattedName(name) {
    return `Mozilla is cool, ${name}`;
}

function setUserName() {
    const myName = prompt("Please enter your name.");

    if (!myName) {
        setUserName();
    } else {}
        localStorage.setItem("name", myName);
        myHeading.textContent = formattedName(myName);
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = formattedName(storedName);
}

myButton.onclick = () => {
    setUserName();
};