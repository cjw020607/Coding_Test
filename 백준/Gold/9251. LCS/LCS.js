fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let str1=input[0];
let str2=input[1];

let l1=str1.length;
let l2=str2.length;

let dp=Array.from({length:l1+1},()=>new Array(l2+1).fill(0));

for(let i=1;i<l1+1;i++){
    for(let j=1;j<l2+1;j++){
        if(str1[i-1]===str2[j-1]){
            dp[i][j]=dp[i-1][j-1]+1;
        }
        else{
            dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);
        }
    }
}

console.log(dp[l1][l2]);