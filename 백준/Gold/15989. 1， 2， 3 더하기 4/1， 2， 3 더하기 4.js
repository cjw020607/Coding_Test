let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let T=+input[0];
let case_arr=input.slice(1).map(Number);

let dp=new Array(10001).fill(1);
for(let i=2;i<10001;i++){
    dp[i]+=dp[i-2];
}

for(let i=3;i<10001;i++){
    dp[i]+=dp[i-3];
}

let result=[];
for(let i=0;i<T;i++){
    let num=case_arr[i];
    result.push(dp[num]);
}

console.log(result.join('\n'));