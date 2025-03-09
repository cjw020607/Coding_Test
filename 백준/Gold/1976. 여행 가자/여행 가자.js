fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let M=+input[1];
let arr=[];
for(let i=2;i<N+2;i++){
    arr.push(input[i].split(' ').map(Number));
}

let plan=input[input.length-1].split(' ').map(Number);
let parent=new Array(N).fill(0).map((_,i)=>i);

let find=(a)=>{
    if(a===parent[a]) return a;
    return parent[a]=find(parent[a]);
}

let union=(a,b)=>{
    a=find(a);
    b=find(b);
    if(a===b) return;
    if(a<b) parent[b]=a;
    else parent[a]=b;
}

let isUnion=(a,b)=>{
    a=find(a);
    b=find(b);
    return a===b;
}

for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(arr[i][j]===1){
            //값이 1이면 연결되어있으니 두 집합을 합침
            union(i,j);
        }
    }
}
let result;
for(let i=0;i<M-1;i++){
    result=isUnion(plan[i]-1,plan[i+1]-1);
    if(!result) break;
}
console.log(result?"YES":"NO");