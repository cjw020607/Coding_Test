let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M,V]=input[0].split(' ').map(Number);
let arr=Array.from({length:N+1},()=>new Array(N+1).fill(0));
let visited=new Array(N+1).fill(0);
for(let i=1;i<=M;i++){
    const [a,b]=input[i].split(' ').map(Number);
    arr[a][b]=1;
    arr[b][a]=1;
}
let dfs_result=[];
const dfs=(V)=>{
    for(let i=1;i<=N;i++){
        if(!visited[i]&&arr[V][i]===1){
            visited[i]=1;
            dfs_result.push(i)
            dfs(i)
        }
    }
}
let bfs_result=[];
const bfs=(V)=>{
    let queue=[V];
    while(queue.length>0){
        let a=queue.shift();
        for(let i=1;i<=N;i++){
            if(!visited[i]&&arr[a][i]===1){
                visited[i]=1;
                bfs_result.push(i);
                queue.push(i);
            }
        }
    }
}

dfs_result.push(V)
visited[V]=1;
dfs(V);
console.log(dfs_result.join(' '));

visited=new Array(N+1).fill(0);

bfs_result.push(V)
visited[V]=1;
bfs(V);
console.log(bfs_result.join(' '));

