
fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let arr=[];
for(let i=1;i<=N;i++){
    arr.push(+input[i]);
}

let sum_list=new Set();
for(let i=0;i<N;i++){
    for(let j=i;j<N;j++){
        sum_list.add(arr[i]+arr[j]);
    }
}

arr.sort((a,b)=>b-a);
let result=[];
for(let i=0;i<N;i++){
    for(let j=i;j<N;j++){
        if(sum_list.has(arr[i]-arr[j])){
            result.push(arr[i]);
        }
    }
}
console.log(Math.max(...result))