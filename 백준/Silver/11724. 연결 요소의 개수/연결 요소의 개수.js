fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);

let parent=Array.from({length:N+1}).map((_,i)=>i);

const find=(a)=>{
    if(parent[a]===a) return a;
    return find(parent[a]);
}

const union=(a,b)=>{
    a=find(a);
    b=find(b);

    if(a===b){
        return;
    }
    
    if(a<b){
        parent[b]=a;
    }else{
        parent[a]=b;
    }
}

for(let i=1;i<M+1;i++){
    let [a,b]=input[i].split(' ').map(Number);
    union(a,b);
}

let result=[];
for(let i=1;i<N+1;i++){
    result.push(find(parent[i]));
}

console.log([...new Set(result)].length)