let fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let campas_arr=[];
let visited=Array.from({length:N},()=>Array(M).fill(0));

let way=[];
for(let i=1;i<=N;i++){
    let a=input[i].split('');
    for(let j=0;j<M;j++){
        if(a[j]==='I'){
            way.push([i-1,j]);
            visited[i-1][j]=1;
            break;
        }
    }
    campas_arr.push(a);
}

let count=0;

//bfs
let startIdx=0;
while(startIdx<way.length){
    let [y,x]=way[startIdx++];
    if(campas_arr[y][x]==="P") count+=1;
    let distance=[[1,0],[-1,0],[0,1],[0,-1]];
    for(let [dy,dx] of distance){
        let ny=dy+y;
        let nx=dx+x;
        if(ny<0||ny>=N||nx<0||nx>=M) continue;
        if(!visited[ny][nx]&&campas_arr[ny][nx]!=="X"){
            way.push([ny,nx]);
            visited[ny][nx]=1;
        }
    }    
}

console.log(count===0?"TT":count)
