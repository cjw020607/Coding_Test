let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let input_arr=input[1].split(' ').map(Number);

let dp=Array.from({length: N-1},()=>new Array(21).fill(0n));

dp[0][input_arr[0]]=1n;
for(let i=1;i<N-1;i++){
    for(let j=0;j<=20;j++){
        if(dp[i-1][j]>0){
            let add=j+input_arr[i];
            let sub=j-input_arr[i];
            if(add<=20) dp[i][add]+=dp[i-1][j];
            if(sub>=0) dp[i][sub]+=dp[i-1][j];
        }
    }
}

console.log(dp[N-2][input_arr[N-1]].toString());