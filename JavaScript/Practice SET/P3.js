//print the game where you with any random game number. ask the user to keep guessing the  game until the user enter correct the value.
let gameNum=7;
let userNum=prompt("Guess the number:");

while(userNum!=gameNum){
    userNum=prompt(" you entered the wrong number.Guess again:");
}
console.log("congrats you entered the right number");

