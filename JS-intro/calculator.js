const add=require('./math')
function product(a,b){
    result=a*b;
    console.log(result);
    add(a,b);
}
let a=product(2,3);