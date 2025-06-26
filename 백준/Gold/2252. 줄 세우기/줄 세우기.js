let fs=require('fs');
let input=fs.readFileSync(0).toString().split('\n');
// N=노드 개수, M이 간선 개수
let [N,M]=input[0].split(' ').map(Number);
let graph=Array.from({length:N+1},()=>[]);

//모든 노드에 대한 진입차수를 0으로 초기화
let indegree=new Array(N+1).fill(0);

// 각 노드에 연결된 간선 정보를 담기
for(let i=1;i<=M;i++){
    let [a,b]=input[i].split(' ').map(Number);
    graph[a].push(b);
    indegree[b]+=1;
}

//위상 정렬 함수
const topology_sort=()=>{
    let result=[];
    let q=[];
    for(let i=1;i<N+1;i++){
        //진입차수가 0이면 큐에 추가
        if(indegree[i]===0){
            q.push(i);
        }
    }
    while(q.length>0){
        let now=q.shift();
        result.push(now);
        for(let g of graph[now]){
            indegree[g]-=1;
            if(indegree[g]===0) q.push(g);
        }
    }
    console.log(result.join(' '))
}
topology_sort();
