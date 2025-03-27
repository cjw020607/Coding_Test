fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [V,E]=input[0].split(' ').map(Number);
let arr=[];
for(let i=1;i<1+E;i++){
    arr.push(input[i].split(' ').map(Number));
}
let parent=new Array(V+1).fill(0).map((_,i)=>i);
arr.sort((a,b)=>a[2]-b[2]);

const find=(a)=>{
    if(a===parent[a]) return a;
    return parent[a]=find(parent[a]);
}

const union=(a,b)=>{
    a=find(a);
    b=find(b);
    if(a===b) return;
    if(a<b) parent[b]=a;
    else parent[a]=b;
}

const isUnion=(a,b)=>{
    return find(a)===find(b);
}

let result=0;
for(let i=0;i<E;i++){
    let [a,b,v]=arr[i];
    if(!isUnion(a,b)){
        union(a,b);
        result+=v;
    }
}

console.log(result)
