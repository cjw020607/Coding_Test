let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let first=new Array(N).fill(0).map((_,i)=>i+1);
let second=input.slice(1).map(Number);

let result=[];

const dfs=(start,current,visited,path)=>{
    if(visited[current]){
        //사이클일 때마다 추가
        if(start===current){
            result.push(...path);
        }
        return;
    }
    visited[current]=1;
    path.push(current);
    dfs(start,second[current-1],visited,path);
}

for(let i=1;i<=N;i++){
    let visited=new Array(N+1).fill(0);
    dfs(i,i,visited,[])
}

result=[...new Set(result)].sort((a,b)=>a-b);
console.log(result.length);
console.log(result.join('\n'));
