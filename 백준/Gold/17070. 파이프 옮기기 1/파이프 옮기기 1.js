const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const N=+input[0];
const arr=[];
for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number));
}

let dp=Array.from({length:N},()=>Array.from({length:N},()=>new Array(3).fill(0)));
//방향 -> 가로:0 세로:1 대각선:2
dp[0][1][0]=1
//첫줄 가로로 가는법 먼저 추가
for(let i=2;i<N;i++){
    if(arr[0][i]===1) break;
    dp[0][i][0]=dp[0][i-1][0];
}


for(let i=1;i<N;i++){
    for(let j=1;j<N;j++){
        if(arr[i][j]===1) continue;
        dp[i][j][0]=dp[i][j-1][0]+dp[i][j-1][2];
        dp[i][j][1]=dp[i-1][j][1]+dp[i-1][j][2];
        //대각선 방향일때만 위,왼쪽 비었는지 추가 확인
        if(arr[i-1][j]===1||arr[i][j-1]===1) continue;
        dp[i][j][2]=dp[i-1][j-1][0]+dp[i-1][j-1][1]+dp[i-1][j-1][2];
    }
}
console.log(dp[N-1][N-1].reduce((acc,item)=>acc+item,0));