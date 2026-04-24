const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split(' ').map(Number);

const len=input.length-1;
let dp=Array.from({length:len+1},()=>Array.from({length:5},()=>new Array(5).fill(Infinity)));
dp[0][0][0]=0;
let queue=[[0,0]];

const cost=(a,b)=>{
    if(a===b) return 1;
    else if(a===0||b===0) return 2;
    else if(Math.abs(a-b)===2) return 4;
    else return 3;
}

for(let i=0;i<len;i++){
    for(let l=0;l<5;l++){
        for(let r=0;r<5;r++){
            if(dp[i][l][r]===Infinity) continue;
            let next=input[i];
            //왼쪽 이동
            if(next!==r){
                dp[i+1][next][r]=Math.min(dp[i+1][next][r],dp[i][l][r]+cost(l,next));
            }
            //오른쪽 이동
            if(next!==l){
                dp[i+1][l][next]=Math.min(dp[i+1][l][next],dp[i][l][r]+cost(r,next));
            }
        }
    }
}

let min=Infinity;

for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if(dp[len][i][j]<min){
            min=dp[len][i][j];
        }
    }
}
console.log(min)