const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');
const [N,M]=input[0].split(' ').map(Number);

const graph=Array.from({length:N+1},()=>[]);
const indegree=new Array(N+1).fill(0); //나한테 향하는 화살의 수
for(let i=1;i<=M;i++){
    let a=input[i].split(' ').map(Number);
    let num=a[0];
    for(let j=1;j<num;j++){
        let from=a[j];
        let to=a[j+1];
        
        graph[from].push(to);
        indegree[to]++;
    }
}

const queue=[];

//indegree 0인거 큐에 넣기
for(let i=1;i<=N;i++){
    if(indegree[i]===0){
        queue.push(i);
    }
}

const result=[];
while(queue.length>0){
    let cur=queue.shift();
    result.push(cur);
    
    for(let next of graph[cur]){
        indegree[next]-=1;
        if(indegree[next]===0){
            queue.push(next);
        }
    }
}
console.log(result.length===N?result.join('\n'):0)