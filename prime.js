let a = 13,count=0
for(let i=1;i<=a;i++){
    if(i % a == 0){
        count++;
    }
}
if(count == 2){
    console.log("Prime Number");
}
else{
    console.log("Not prime ");
}