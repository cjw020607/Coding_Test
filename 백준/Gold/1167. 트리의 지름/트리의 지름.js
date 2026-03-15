const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const V=+input[0];

let tree=Array.from({length:V+1},()=>[]);
for(let i=1;i<=V;i++){
    let a=input[i].split(' ').map(Number);
    let node=+a[0];
    let j=1;
    while(a[j]!==-1){
        tree[node].push([a[j],a[j+1]]);
        j+=2;
    }
}

let visited=new Array(V+1).fill(false);
let max=0;
let farNode=0;
const dfs=(n,w)=>{
    visited[n]=true;
    if(max<w){
        max=w;
        farNode=n;
    }

    for(let [nextNode,nextWeight] of tree[n]){
        if(!visited[nextNode]){
            dfs(nextNode,w+nextWeight);
        }
    }
}

dfs(1,0)
visited=new Array(V+1).fill(false);
maxDist=0;
dfs(farNode,0)
console.log(max)