const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [N,M,K]=input[0].split(' ').map(Number);
const candies=input[1].split(' ').map(Number);
const parent=Array.from({length:N+1},(_,i)=>i);

const total=0;
const count=0;

const find=(a)=>{
    if(a===parent[a])return a;
    return find(parent[a]);
}

const union=(a,b)=>{
    a=find(a);
    b=find(b);

    if(a===b)return;
    if(a<b){
        parent[b]=a;
    }else{
        parent[a]=b;
    }
}

const isUnion=(a,b)=>{
    return find(a)===find(b);
}

for(let i=2;i<2+M;i++){
    let [a,b]=input[i].split(' ').map(Number);
    if(!isUnion(a,b)){
        union(a,b);
    }
}

let groupSize=new Array(N+1).fill(0);
let groupCandy=new Array(N+1).fill(0);

for(let i=1;i<=N;i++){
    let root=find(i);
    groupSize[root]+=1;
    groupCandy[root]+=candies[i-1];
}

let groups=[];
for(let i=1;i<=N;i++){
    if(groupSize[i]>0){
        groups.push([groupSize[i],groupCandy[i]]);
    }
}

let dp=new Array(K).fill(0);


for(let i=0;i<groups.length;i++){
    let [s,v]=groups[i];
    for(let j=K-1;j>=s;j--){
        dp[j]=Math.max(dp[j],dp[j-s]+v);
    }
}
console.log(Math.max(...dp));