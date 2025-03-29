fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=[];
for(let i=1;i<1+M;i++){
    arr.push(input[i].split(' ').map(Number));
}

let parent=new Array(N+1).fill(0).map((_,i)=>i);

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

arr.sort((a,b)=>a[2]-b[2]);

let cost=0;
let last=0;
for(let i=0;i<M;i++){
    let [A,B,C]=arr[i];
    if(!isUnion(A,B)) {
        union(A,B);
        cost+=C;
        last=C;
    }
}

console.log(cost-last)