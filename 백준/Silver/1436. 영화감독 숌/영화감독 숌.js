fs=require('fs');
input=+fs.readFileSync(0).toString().trim();
let num=666;

let count=0;
while(count<input){
    if((num+"").includes("666"))count++;
    num++;
}

console.log(num-1);