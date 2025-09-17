// for loop
for(let i=0;i<=5;i++){
    console.log("Abhijat Patel");
}
console.log("for loop ended");

//calculate sum of 1 to 5.(example)
let sum=0;
for(let i=0;i<=5;i++){
    sum=sum+i;
}
console.log("sum :",sum);
console.log("for loop ended");

//while loop
let j=0;
while(j<=5){
    console.log("Abhijat Patel");
    j++;
}
console.log("while loop ended");

//do while loop
let k=0;
do{
    console.log("Abhijat Patel");
    k++;
}while(k<=5);
console.log("do while loop ended");

//for of loop
let str="Abhijat Patel";
let size=0;
for(let i of str){
    console.log("i :",i);
    size++;
}
console.log("size of string :",size);
console.log("for of loop ended");

//for in loop
let student={
    name:"Abhijat Patel",
    age:21,
    city:"Ayodhya",
    cgpa:8.5,
    isPassed:true,
};
for(let key in student){
    console.log("key :",key," value :",student[key]);
}
console.log("for in loop ended");