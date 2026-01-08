let fs=require('fs');
let N=+fs.readFileSync(0).toString().trim();
let dp=[0,1,3];

for(let i=3;i<=N;i++){
    // 짝수
    if(i%2===0){
        dp[i]=(dp[i/2]**2+2*(dp[i/2-1]**2))%10007
    }
    //홀수
    else{
        dp[i]=(dp[i-1]*2-1)%10007;
    }
}

console.log(dp[N]%10007)