// 루트 노드를 찾는 find 연산
const find=(a)=>{
    if(a===parent[a]) return a;
    return parent[a]=find(parent[a]);
}

// 두 노드를 같은 집합으로 합치는 Union 연산
const union=(a,b)=>{
    a=find(a);
    b=find(b);
    if(a===b) return;
    if(a<b) parent[b]=a;
    else parent[a]=b;
}

// 두 노드가 연결되어 있는지 판별하는 함수
const isUnion=(a,b)=>{
    a=find(a);
    b=find(b);
    return (a===b);
}

fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=[];
let parent=new Array(N+1).fill(0).map((_,i)=>i);
for(let i=1;i<=M;i++){
    let a=input[i].split(' ').map(Number);
    arr.push(a);
}

for(let i=0;i<M;i++){
    let [idx,a,b]=arr[i];
    let result;
    if(idx===0){
        //a,b 합치기
        union(a,b);
        
    }else{
        //a,b가 같은 루트를 가지는지 확인하기
        console.log(isUnion(a,b)?"YES":"NO");
    }
}