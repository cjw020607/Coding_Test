let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let map_arr=[];
for(let i=1;i<N+1;i++){
   map_arr.push(input[i].split('').map(Number));
}

let visited=Array.from(Array(N),()=>new Array(N).fill(0));
let total_arr=[];
let count=0;
const bfs=(y,x)=>{
    let total=0;
    let way=[[y,x]];
    visited[y][x]=1;
    while(way.length>0){
        let [y,x]=way.shift();
        total+=1;
        let distance=[[1,0],[-1,0],[0,1],[0,-1]];
        for(let [dy,dx] of distance){
            let ny=dy+y;
            let nx=dx+x;
            if(ny<0||ny>=N||nx<0||nx>=N) continue;
            if(!visited[ny][nx]&&map_arr[ny][nx]===1){
                visited[ny][nx]=1;
                way.push([ny,nx])
            }
        }
    }
    count+=1;
    total_arr.push(total);
}

for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(!visited[i][j]&&map_arr[i][j]===1){
            bfs(i,j);
        }
    }
}
console.log(count)
console.log(total_arr.sort((a,b)=>a-b).join('\n'))