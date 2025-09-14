//Logical Operators

let x=5;
let y=10;
//AND (&&)
console.log(x>3 && y>5);//true
console.log(x>3 && y<5);//false

//OR (||)
console.log(x>3 || y<5);//true
console.log(x<3 || y<5);//false
//NOT (!)
console.log(!(x>3));//false
console.log(!(x<3));//true
console.log(!(x==5));//false
console.log(!(x!=5));//true
console.log(!!(x==5));//true
console.log(!!(x!=5));//false
console.log(!!(x>3 && y>5));//true
console.log(!!(x>3 && y<5));//false
console.log(!!(x>3 || y<5));//true
console.log(!!(x<3 || y<5));//false
console.log(!!(!(x>3)));//true
console.log(!!(!(x<3)));//false
console.log(!!(!(x==5)));//true
console.log(!!(!(x!=5)));//false
console.log(!!(!(x==5 && y>5)));//false
console.log(!!(!(x==5 && y<5)));//true
console.log(!!(!(x==5 || y<5)));//false
console.log(!!(!(x<5 || y<5)));//true
console.log(!!(!(x>5 || y<5)));//true
console.log(!!(!(x<5 && y<5)));//true
console.log(!!(!(x>5 && y<5)));//true
console.log(!!(!(x<5 && y>5)));//false
console.log(!!(!(x>5 && y>5)));//true
console.log(!!(!(x<5 || y>5)));//false
console.log(!!(!(x>5 || y>5)));//true
console.log(!!(!(x==5 && y==10)));//false
console.log(!!(!(x!=5 && y==10)));//true
console.log(!!(!(x==5 || y==10)));//false
console.log(!!(!(x!=5 || y==10)));//true
console.log(!!(!(x==5 || y!=10)));//false
console.log(!!(!(x!=5 || y!=10)));//true
console.log(!!(!(x==5 && y!=10)));//true
console.log(!!(!(x!=5 && y!=10)));//true
console.log(!!(!(x==5 || y>5)));//false
console.log(!!(!(x!=5 || y>5)));//true