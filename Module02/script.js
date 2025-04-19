// get user first name
let Fname = prompt("Enter your first name:");

// use user's name for the greeting
alert("Hello, " + Fname + "!");

// constant storing pi value
const piValue = 3.1415926;

// user gives favorite number
let myFavNum = prompt("What is your favorite number?");
myFavNum = parseFloat(myFavNum); // converting from string to a number

// calculating the area of a circle with that number as radius
let myArea = piValue * (myFavNum ** 2);

// webpage displays the result
document.getElementById("output").innerHTML =
    `Hi ${Fname}, you entered ${myFavNum} as your favorite number. ` +
    `If that was the radius of a circle the circle’s area would be ${myArea.toFixed(6)}.` +
    `<br><br>` +
    `Variables used:<br>` +
    `Fname: ${Fname}<br>` +
    `piValue: ${piValue}<br>` +
    `myFavNum: ${myFavNum}<br>` +
    `myArea: ${myArea.toFixed(6)}`;