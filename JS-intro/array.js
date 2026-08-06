let myarray=[1,2,3,4,5];
console.log(myarray);
console.log(myarray[2]);
console.log(myarray.length);
let mynewarray=[
{
    name:"ance",
   id:2,
    grade:"A"
},
{
   name:"vincent",
   id:3,
   grade:"B"
}
];
console.log(mynewarray);
console.log(mynewarray[0].name);
console.log(mynewarray[1].grade);
console.log(mynewarray[0]['id']);


let fruits=["apple","mango","grapes","pappaya"]
console.log(fruits);
console.log(fruits[0]);
fruits.push("kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.splice(1,2);
console.log(fruits);
console.log(fruits.includes("apple"));
console.log(fruits.includes("kiwi"));
