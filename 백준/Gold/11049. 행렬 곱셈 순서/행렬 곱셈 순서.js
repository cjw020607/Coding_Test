const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const N=+input[0];
let dp=Array.from({length:N+1},()=>new Array(N+1).fill(Infinity));
let matrix=Array.from({length:N+1},()=>new Array(2).fill(0));

for(let i=1;i<=N;i++){
    matrix[i]=input[i].split(' ').map(Number);
}

for(let i=0;i<=N;i++){
    dp[i][i]=0;
}

for(let i=1;i<N;i++){

}

//길이 기준
for(let len=2;len<=N;len++){
    for(let i=1;i<=N-len+1;i++){
        let j=i+len-1;
        for(let k=i;k<j;k++){
            dp[i][j]=Math.min(dp[i][j],dp[i][k]+dp[k+1][j]+matrix[i][0]*matrix[k][1]*matrix[j][1])
        }
    }
}

console.log(dp[1][N])