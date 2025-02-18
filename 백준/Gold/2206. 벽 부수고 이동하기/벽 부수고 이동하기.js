fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=[];
let visited=Array.from(new Array(N),()=>Array.from(new Array(M),()=>new Array(2).fill(0)));
for(let i=1;i<=N;i++){
    arr.push(input[i].split('').map(Number));
}

let way=[];
let result;
visited[0][0][0]=1;
const bfs=(way)=>{
    let start=0
    while(way.length>start){
        let [y,x,dist,broken]=way[start++];
        if(y===N-1&&x===M-1){
            return dist+1;
        }
        let distance=[[0,1],[0,-1],[1,0],[-1,0]];
        for(let [dy,dx] of distance){
            let nx=x+dx;
            let ny=y+dy;
            //범위 넘어갈때
            if(nx<0||nx>=M||ny<0||ny>=N){
                continue;
            }
            //아직 방문 안 한 벽 만나고 아직 벽 안부셨을 때(처음 벽 부수는거)
            else if(arr[ny][nx]===1&&visited[ny][nx][1]===0&&broken===0){
                    visited[ny][nx][1]=1
                    way.push([ny,nx,dist+1,1]);
            }
            //아직 방문 안한 일반 길일 때(벽을 부순적이 있을 수도 있고 없을 수도 있음)
            else if(arr[ny][nx]===0&&visited[ny][nx][broken]===0){
                visited[ny][nx][broken]=1
                way.push([ny,nx,dist+1,broken]);
            }
        }
    }
    return -1
}
console.log(bfs([[0,0,0,0]]))
