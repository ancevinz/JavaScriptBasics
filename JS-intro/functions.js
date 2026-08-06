function greetings(){
    console.log ("Hello Good morning");
}
greetings();

//parameters
function greet(name) { // formal parameter
    console.log("Hello " + name); //concatination operator
}
greet("Ance");// actual parameter

function addition(a,b){
    console.log(a+b);
}
addition(10,15);

function division(a,b){
    console.log(a/b);
}
division(15,5);

//return
function getdata(data){
  return data;
}
let a=getdata("10");
if (a==10){
console.log("success");
}

function add(a, b) {
    return a + b;
}
let result = add(5, 3);
console.log(result);

// arrow functions=ES6 OR moder javascript
const square = (x) => {
    return x * x;
};

console.log(square(5));

//let variablename=(parameters)=>{
//statement
//};
//variablename()

let adds=(a,b)=>{
console.log(a+b);
};
adds(3,5);