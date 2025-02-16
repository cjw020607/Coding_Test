fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let [N,K]=input[0].split(' ').map(Number);
let input_arr=[[0,0]];
for(let i=1;i<=N;i++){
    input_arr.push(input[i].split(' ').map(Number));
}
let weight_arr=Array.from(Array(N+1),()=>Array(K+1).fill(0));

for(let i=1;i<=N;i++){
    let [W,V]=input_arr[i];
    for(let j=1;j<=K;j++){
        if(j<W){
            weight_arr[i][j]=weight_arr[i-1][j]
        }
        else{
            weight_arr[i][j]=Math.max(weight_arr[i-1][j],V+weight_arr[i-1][j-W]);
        }
    }
}
console.log(weight_arr[N][K])