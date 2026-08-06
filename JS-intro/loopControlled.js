//loop controlled statements
// break
for(let b = 0; b <= 5; b++){
    if(b == 3){
        break;
    }
    console.log(b);
}
// continue
let c = 20;
do{
    if(c==23){
        c=c+1;
        continue;
    }
    console.log(c);
    c=c+1;
}while(c<= 25);