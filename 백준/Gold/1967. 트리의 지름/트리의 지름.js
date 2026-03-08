const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const n=+input[0];
let tree=Array.from({length:n+1},()=>[])

for(let i=1;i<n;i++){
    const [p,c,w]=input[i].split(' ').map(Number);
    tree[p].push([c,w]);
    tree[c].push([p,w]);
}

let maxDist=0;
let farNode=0;

const dfs=(node,dist,visited)=>{
    visited[node]=true;

    if(dist>maxDist){
        maxDist=dist;
        farNode=node;
    }

    for(const [next,weight] of tree[node]){
        if(!visited[next]){
            dfs(next,dist+weight,visited);
        }
    }
}

dfs(1,0,Array(n+1).fill(false));

maxDist=0;
dfs(farNode,0,Array(n+1).fill(false));

console.log(maxDist);