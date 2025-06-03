fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let A=input[1].split(' ').map(Number);
let dp=new Array(N).fill(1);

for(let i=1;i<N;i++){
    for(let j=0;j<i;j++){
        //A[i]까지 배열 중에 가장 긴 증가 수열을 구함
        if(A[i]>A[j]){
            dp[i]=Math.max(dp[i],dp[j]+1);
        }
    }
}

console.log(Math.max(...dp));