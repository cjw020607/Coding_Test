let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,Q]=input[0].split(' ').map(Number);
let usado=Array.from({length:N+1},()=>[]);
for(let i=1;i<N;i++){
    let [a,b,v]=input[i].split(' ').map(Number);
    usado[a].push([b,v]);
    usado[b].push([a,v]);
}

let question=[];
for(let i=N;i<N+Q;i++){
    question.push(input[i].split(' ').map(Number));
}
const bfs=(start,minUsado)=>{
    let visited=new Array(N+1).fill(0);
    let way=[[start,Infinity]];
    visited[start]=1;
    let count=0;
    while(way.length>0){
        let [current,value]=way.shift();
        for(let [next,cost] of usado[current]){
            if(!visited[next]&&cost>=minUsado){
                visited[next]=1;
                way.push([next,cost]);
                count+=1;
            }
        }
    }
    return count;
}
let result=[];
for(let i=0;i<Q;i++){
    let [k,v]=question[i];
    result.push(bfs(v,k));
}
console.log(result.join('\n'))
