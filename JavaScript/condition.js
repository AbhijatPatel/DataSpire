// coditional statements.

//if statement.
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} 

let mode="light";
let color;
if(mode==="dark"){
    color="black";
}

if (mode ==="light"){
    color="white";
}
console.log(color);

//if...else statement.

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//odd or even number.
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

//else if statement.

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}