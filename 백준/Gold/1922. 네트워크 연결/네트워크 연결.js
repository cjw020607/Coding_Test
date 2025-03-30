fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let M=+input[1];
let arr=[];
let parent=new Array(N+1).fill(0).map((_,i)=>i);

for(let i=2;i<M+2;i++){
    arr.push(input[i].split(' ').map(Number));
}

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

let result=0;
for(let i=0;i<M;i++){
    let [a,b,c]=arr[i];
    if(!isUnion(a,b)){
        union(a,b);
        result+=c;
    }
}
console.log(result);