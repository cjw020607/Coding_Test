let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let input_arr=[];
for(let i=1;i<=N+M;i++){
    input_arr.push(input[i].split(' ').map(Number));
}

let visited=Array.from({length:101},()=>new Array(101).fill(0));

let way=[[1,0]];
while(way.length>0){
    let [recent,count]=way.shift();
    if(recent===100) break;
    for(let i=1;i<=6;i++){
        let next=recent+i;
        if(next<1||next>100) continue;
        for(let j=0;j<N+M;j++){
            if(input_arr[j][0]===next){
                next=input_arr[j][1];
            }
        }
        if(!visited[next][count+1]){
            visited[next][count+1]=1;
            way.push([next,count+1])
        }
    }
}
for(let i=1;i<101;i++){
    if(visited[100][i]===1){
        console.log(i);
        break;
    }
}