fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('');

let sum=0;
let idx;
for(let i=0;i<12;i++){
    let a=input[i];
    if(a==='*') {
        idx=i;
        continue;
    }
    if(i%2===0) sum+=+a;
    else sum+=+a*3;
}
let check=+input[input.length-1];
let add_sum=sum+check+"";
let lastNum=+add_sum[add_sum.length-1];
let result;
if(idx%2===1){
    let i=0;
    let a=Infinity;
    while(a%10!==0){
        a=i*3+lastNum;
        if(a%10===0) result=i;
        i++;
    }
}
else{
    result=10-lastNum;
}
console.log(result)