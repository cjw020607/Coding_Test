const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const N=+input[0];

let visited=[];
let finished=[];
let arr;

const dfs=(cur)=>{
    visited[cur]=true;
    let next=arr[cur];
    if(!visited[next]){
        dfs(next);
    }else if(!finished[next]){
        //사이클
        let temp=next;
        while(temp!==cur){
            result++;
            temp=arr[temp];
        }
        result++;
    }
    finished[cur]=true;
}

for(let i=1;i<=N*2;i+=2){
    let n=+input[i];
    arr=[0, ...input[i+1].split(' ').map(Number)];
    visited=new Array(n+1).fill(false);
    finished=new Array(n+1).fill(false);
    result=0;
    for(let i=1;i<=n;i++){
        if(!visited[i]){
            dfs(i);
        }
    }
    console.log(n-result)
}