// Templates Literals
let obj = {
    name: "Alice",
    age: 30
};
console.log(`the Name is ${obj.name} and Age ${obj.age}`); // Using template literals to embed expressions
console.log("the Name is",obj.name,"and age is",obj.age); // Using traditional string concatenation

// string interpolation
let a = 5;
let b = 10;
console.log(`sum of a & b is ${a + b}.`); // Embedding expressions in template literals

//escaped characters(\n, \t, \', \", \\)
let str = "Hello,\nWorld!\tIt's a beautiful day!\" \\ ";
console.log(str); // Displaying string with escaped characters
console.log(str.length); // Length of the string with escaped characters