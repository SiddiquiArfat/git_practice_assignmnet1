let number = 13;
let factors = 0 ;
for(let i=1; i<=number;i++){
    if(number % i == 0){
        factors++;
    }
}
if(factors === 2){
    console.log("Prime Number");
}
else{
    console.log("Not a Prime Number");
}