let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let relation_arr=[];
for(let i=1;i<=M;i++){
    relation_arr.push(input[i].split(' ').map(Number));
}

let arr=Array.from({length:N+1},()=>Array(N+1).fill(Infinity));

for(let i=0;i<M;i++){
    let [a,b]=relation_arr[i];
    arr[a][b]=1;
    arr[b][a]=1;
}

for(let k=1;k<=N;k++){
    for(let i=1;i<=N;i++){
        for(let j=1;j<=N;j++){
            if(i===k){
                arr[i][k]=0; 
                continue; 
            }
            if(arr[i][k]+arr[k][j]<arr[i][j]){
                arr[i][j]=arr[i][k]+arr[k][j];
            }
        }
    }
}
let sum_arr=[];

for(let i=1;i<=N;i++){
    sum_arr.push(arr[i].slice(1).reduce((acc,item)=>acc+item,0))
}

let min=Math.min(...sum_arr);
for(let i=0;i<N;i++){
    if(sum_arr[i]===min){
        console.log(i+1);
        break;
    }
}