// the container for my output
let output = document.getElementById("output");

// task 1 for loop 0–10 with even and odd message
output.innerHTML += "<h2>Even/Odd Count:</h2>";
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        output.innerHTML += `Count ${i} is even<br>`;
    } else {
        output.innerHTML += `Count ${i} is odd<br>`;
    }
}

// task number 2 a do while loop up to user's input 5 to 20
let myNum;
do {
    myNum = prompt("Enter a number between 5 and 20:");
    myNum = parseInt(myNum);
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

output.innerHTML += "<h2>Do While Loop:</h2>";
let counter = 1;
do {
    output.innerHTML += `Loop counter: ${counter}<br>`;
    counter++;
} while (counter <= myNum);

// task 3 subject array
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// forEach display
output.innerHTML += "<h2>Subjects (using forEach):</h2>";
subjects.forEach(subject => {
    output.innerHTML += `Subject: ${subject}<br>`;
});

// comma separated code and displayed everything in one line
output.innerHTML += "<h2>Subjects (comma-separated):</h2>";
output.innerHTML += subjects.join(", ");