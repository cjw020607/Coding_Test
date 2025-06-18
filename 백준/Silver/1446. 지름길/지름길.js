fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,D]=input[0].split(' ').map(Number);
let path_arr=[];
for(let i=1;i<=N;i++){
    path_arr.push(input[i].split(' ').map(Number));
}

let shortest_arr=Array.from({length:D+1},()=>new Array(D+1).fill(Infinity))

for(let i=0;i<N;i++){
    let [start,end,length]=path_arr[i];
    if(start<0||start>D||end<0||end>D) continue;
    if(shortest_arr[start][end]>length){
        shortest_arr[start][end]=length;
    }
}

for(let k=0;k<=D;k++){
    for(let i=0;i<=D;i++){
        for(let j=0;j<=D;j++){
            //길 없을 경우는 지름길 없이 직접 계산(도착지-시작지)
            if(shortest_arr[i][j]===Infinity){
                if(i<=j) shortest_arr[i][j]=j-i;
            }
            else{
                shortest_arr[i][j]=Math.min(shortest_arr[i][j],shortest_arr[i][k]+shortest_arr[k][j]);  
            }
        }
    }
}

console.log(shortest_arr[0][D])