fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M,k]=input[0].split(' ').map(Number);
let A=input[1].split(' ').map(Number);
let friend_list=[];
let parent=new Array(N+1).fill(0).map((_,i)=>i);
for(let i=2;i<2+M;i++){
    friend_list.push(input[i].split(' ').map(Number));
}

const find=(a)=>{
    if(a===parent[a]) return a;
    return parent[a]=find(parent[a])
}

const union=(a,b)=>{
    a=find(a);
    b=find(b);
    if(a===b) return;
    //친구비용이 적게 드는 것을 부모로 두기
    if(A[a-1]<A[b-1]) parent[b]=a;
    else parent[a]=b;
}

for(let i=0;i<M;i++){
    let [a,b]=friend_list[i];
    union(a,b);
}
//새로 업데이트
for(let i=1;i<=N;i++){
    find(i);
}
parent.splice(0,1)
let cost=[...new Set(parent)];
let total=0;
for(let item of cost){
    total+=A[item-1];
}
total<=k?console.log(total):console.log("Oh no");
