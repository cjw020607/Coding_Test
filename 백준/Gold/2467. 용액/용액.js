fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let arr=input[1].split(' ').map(Number);
let result;
let minDiff=Infinity;

let start=0;
let end=N-1;
while(start<end){
    let diff=arr[start]+arr[end];
    if(minDiff>Math.abs(diff)){
        minDiff=Math.abs(diff);
        result=[arr[start],arr[end]];
    }
    if(diff<0) start+=1;
    else if(diff>0) end-=1;
    //차이가 0일때 바로 멈춤
    else break;

}
console.log(result.join(' '))