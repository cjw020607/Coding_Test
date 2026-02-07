const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const T=+input[0];
for(let i=1;i<=T*3;i+=3){
    let n=+input[i];
    let dp=Array.from({length:n},()=>new Array(3).fill(0));
    dp[0][0]=0;
    let upRow=input[i+1].split(' ').map(Number);
    let downRow=input[i+2].split(' ').map(Number);
    dp[0][1]=upRow[0];
    dp[0][2]=+downRow[0];
    
    for(let j=1;j<n;j++){
        dp[j][0]=Math.max(dp[j-1][0],dp[j-1][1],dp[j-1][2]);
        dp[j][1]=Math.max(dp[j-1][0],dp[j-1][2])+(upRow[j]);
        dp[j][2]=Math.max(dp[j-1][0],dp[j-1][1])+(downRow[j]);
    }
    console.log(Math.max(...dp[n-1]))
}