fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let input_arr=[];
for(let i=1;i<=N;i++){
    input_arr.push(input[i].split(' ').slice(1));
}
let trie={};

const add=(node,arr)=>{
    if(!arr.length) return;
    let [head, ...left]=arr;
    if(!node[head]) node[head]={};
    add(node[head],left);
}

const printTree=(node,depth)=>{
    let keys=Object.keys(node).sort();
    for(let key of keys){
        console.log("--".repeat(depth)+key);
        printTree(node[key],depth+1);
    }
}

for(let line of input_arr){
    add(trie,line);
}

printTree(trie,0);
