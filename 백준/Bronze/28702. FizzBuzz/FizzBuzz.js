fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let idx;
for(let i=0;i<3;i++){
    if(!Number.isNaN(+input[i])){
        idx=i;
    }
}
let num=+input[idx]+3-idx;
let result;
if(num%3===0&&num%5===0) result="FizzBuzz";
else if(num%3===0) result="Fizz";
else if(num%5===0) result="Buzz";
else result=num;
console.log(result)