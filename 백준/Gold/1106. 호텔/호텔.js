const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [C,N]=input[0].split(' ').map(Number);
// const weight_arr=Array.from({length:N+1},()=>new Array(C+1).fill(0));
const dp=new Array(C+101).fill(Infinity);
dp[0]=0;
for(let i=1;i<=N;i++){
    const [cost,people]=input[i].split(' ').map(Number);
    for(let j=people;j<=C+100;j++){
        dp[j]=Math.min(dp[j],dp[j-people]+cost);
    }
}

// C명 이상을 만족하는 모든 경우 중 최소 비용
console.log(Math.min(...dp.slice(C)))
