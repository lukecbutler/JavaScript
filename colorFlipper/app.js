
function turnRed() {
    document.body.style.backgroundColor = "red";
    document.querySelector('h1').style.color = "white";
}

function turnGreen() {
    document.body.style.backgroundColor = "green";
    document.querySelector('h1').style.color = "white";
}

function turnBlue() {
    document.body.style.backgroundColor = "blue";
    document.querySelector('h1').style.color = "white";
}

function turnRandom() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = bgColor;
    document.querySelector('h1').style.color = "white";
}