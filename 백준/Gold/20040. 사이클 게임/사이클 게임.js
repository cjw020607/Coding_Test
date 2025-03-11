fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [n,m]=input[0].split(' ').map(Number);
let arr=[];
let parent=new Array(n).fill(0).map((_,i)=>i);
for(let i=1;i<=m;i++){
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

const isCycle=(a,b)=>{
    return find(a)===find(b);
}

let result;
for(let i=0;i<m;i++){
    let [a,b]=arr[i];
    if(isCycle(a,b)){
        result=i+1;
        break;
    }
    union(a,b);
}
result?console.log(result):console.log(0);