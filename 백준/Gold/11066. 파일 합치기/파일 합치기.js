let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let T=+input[0];
for(let i=1;i<=T*2;i+=2){
    let K=+input[i];
    let files=input[i+1].split(' ').map(Number);

    //누적합
    let prefix_sum=new Array(K+1).fill(0);
    for(let j=1;j<=K;j++){
        prefix_sum[j]=prefix_sum[j-1]+files[j-1];
    }

    let dp=Array.from({length:K+1},()=>new Array(K+1).fill(Infinity));

    for(let i=1;i<=K;i++){
        dp[i][i]=0;
    }

    for(let length=2;length<=K;length++){
        for(let i=1;i<=K-length+1;i++){
            let j=i+length-1;
            for(let k=i;k<j;k++){
                let cost=dp[i][k]+dp[k+1][j]+prefix_sum[j]-prefix_sum[i-1];
                dp[i][j]=Math.min(cost,dp[i][j]);
            }
        }
    }
    console.log(dp[1][K])
}