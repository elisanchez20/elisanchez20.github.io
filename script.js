// part1 - counter Functions
function tickUp() {
    let counterElement = document.getElementById("counter");
    let value = parseInt(counterElement.innerText);
    value++;
    counterElement.innerText = value;
}

function tickDown() {
    let counterElement = document.getElementById("counter");
    let value = parseInt(counterElement.innerText);
    value--;
    counterElement.innerText = value;
}

// part 2 -simple For Loop
function runForLoop() {
    let counter = parseInt(document.getElementById("counter").innerText);
    let result = "";

    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").innerText = result;
}

// part 3 - odd Numbers
function showOddNumbers() {
    let counter = parseInt(document.getElementById("counter").innerText);
    let result = "";

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").innerText = result;
}

// part 4 - arrays
function addMultiplesToArray() {
    let counter = parseInt(document.getElementById("counter").innerText);
    let arr = [];

    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }

    console.log(arr);
}

// part 5 — create Object From Form
function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let carObject = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(carObject);
}

// part 6 — load Car Objects Into Form
function loadCar(num) {
    let car;

    if (num === 1) car = carObject1;
    if (num === 2) car = carObject2;
    if (num === 3) car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

// part 7 — change Paragraph Color
function changeColor(num) {
    let paragraph = document.getElementById("styleParagraph");

    if (num === 1) paragraph.style.color = "red";
    if (num === 2) paragraph.style.color = "green";
    if (num === 3) paragraph.style.color = "blue";
}
