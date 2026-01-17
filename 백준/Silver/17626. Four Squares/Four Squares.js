let fs=require('fs');
let n=+fs.readFileSync(0).toString().trim().split('\n');
let dp=[0,1];
for(let i=2;i<=n;i++){
    let min=Infinity;
    let temp;
    let limit=+(i**0.5);
    for(let j=1;j<=limit;j++){
        temp=dp[i-j**2]+1;
        if(min>temp){
            min=temp;
        }
    }
    dp.push(min);
}

console.log(dp[n])