let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let map=[];
for(let i=1;i<=M;i++){
    map.push(input[i].split(' ').map(Number));
}

let visited=Array.from({length:M},()=>new Array(N).fill(0));
let roomMap=Array.from({length:M},()=>new Array(N).fill(0));
let roomSizes=[];
let direction=[[1,0,8],[0,1,4],[-1,0,2],[0,-1,1]]//남:8,동:4,북:2,서:1

let bfs=(i,j,id)=>{
    let size=0;
    let way=[[i,j,id]];
    visited[i][j]=1;
    roomMap[i][j]=id;
    while(way.length>0){
        let [y,x,roomId]=way.shift();
        size+=1;
        let cost=map[y][x];
    
        for(let [dy,dx,dc] of direction){
            let ny=y+dy;
            let nx=x+dx;
            if(ny<0||nx<0||ny>=M||nx>=N) continue;
            //벽일 때
            if((cost&dc)!==0) continue;
            if(visited[ny][nx]) continue;

            visited[ny][nx]=1;
            roomMap[ny][nx]=id;

            way.push([ny,nx,id]);
        }
    }
    return size;
}

let max=0;
let roomId=0;

// 각 방 탐색 및 넓이 계산
for(let i=0;i<M;i++){
    for(let j=0;j<N;j++){
        if(!visited[i][j]){
            let size=bfs(i,j,roomId);
            roomSizes.push(size);
            roomId+=1;
        }
    }
}

// 벽 하나 제거해서 만들 수 있는 최대 방 넓이 계산
let maxCombined=0;
for(let i=0;i<M;i++){
    for(let j=0;j<N;j++){
        let currentId=roomMap[i][j];
        for(let [dy,dx,dc] of direction){
            let ny=i+dy;
            let nx=j+dx;
            if(ny<0||nx<0||ny>=M||nx>=N) continue;
            let neighborId=roomMap[ny][nx];
            if(currentId!==neighborId&&(map[i][j]&dc)){
                let combined=roomSizes[currentId]+roomSizes[neighborId];
                maxCombined=Math.max(combined,maxCombined);
            }
        }
    }
}

console.log(roomId)
console.log(Math.max(...roomSizes));
console.log(maxCombined);