const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [N,M]=input[0].split(' ').map(Number);
const map=[];
for(let i=1;i<=N;i++){
    map.push(input[i].split(''));
}

let visited=Array.from({length:N},()=>new Array(M).fill(false));
let finished=Array.from({length:N},()=>new Array(M).fill(false));
let result=0;

const dfs=(i,j)=>{
    let cur=map[i][j];

    visited[i][j]=true;

    let ni=i;
    let nj=j;
    
    if(cur==="D"){
        ni=i+1;
    }else if(cur==="U"){
        ni=i-1;
    }else if(cur==="L"){
        nj=j-1;
    }else{
        nj=j+1;
    }
    if(!visited[ni][nj]){
        dfs(ni,nj);
    }
    //사이클인 경우
    else if(!finished[ni][nj]){
        result+=1;
    }
    finished[i][j]=true;
}

for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
        if(!visited[i][j]){
            dfs(i,j);
        }
    }
}

console.log(result);