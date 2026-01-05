fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let computer_num=+input[0];
let pair_num=+input[1];
let parent=Array.from({length:computer_num+1}).map((_,i)=>i);

const union=(a,b)=>{ 
    a=find(a);
    b=find(b);
    if(a===b) return;
    if(a<b){
        parent[b]=a;
    }else{
        parent[a]=b;
    }
}

const find=(a)=>{
    if(a===parent[a]) return a;
    return find(parent[a]);
}

for(let i=2;i<2+pair_num;i++){
    let [a,b]=input[i].split(' ').map(Number);
    union(a,b);
}
console.log(parent.filter(item=>find(item)===1).length-1)