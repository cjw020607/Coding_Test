let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

let N=+input[0];

let parent=Array.from({length:N+1}).fill(0);
let graph=Array.from({length:N+1},()=>[])

//간선 입력
for(let i=1;i<N;i++){
    const[a,b]=input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

//bfs
let idx=0;
let queue=[1];
parent[1]=1;
while(idx<queue.length){
    let num=queue[idx++];
    for(let i=0;i<graph[num].length;i++){
        let next=graph[num][i];
        if(parent[next]===0){
            parent[next]=num;
            queue.push(next);
        }
    }
}

console.log(parent.slice(2).join('\n'))