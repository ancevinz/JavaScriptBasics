function greetings():void{
console.log("Good morning")
}
greetings();
function getName(): string {
    return "Ance";
}
console.log(getName());

function addition(a : number,b : number): void {
    console.log(a+b)
}
addition(10,15);

function multiplication(a: number, b:number): number{
    return(a*b);
}
console.log(multiplication(10,3));

function combine(a:string, b:string): string;
function combine(a:number, b:number): number;
function combine(a:any,b:any): any{
    return(a+b);
}
console.log(combine("ance","vincent"))
console.log(combine(2,3))