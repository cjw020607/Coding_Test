let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [L,W]=input[0].split(' ').map(Number);
let map=[];
for(let i=1;i<=L;i++){
    map.push(input[i].split(''));
}

let way=[[0,1,0]];
let visited=Array.from({length:L},()=>new Array(W).fill(0));
let maxList=[];
const bfs=(way)=>{
    let maxCount=0;
    while(way.length>0){
        let [y,x,count]=way.shift();
        if(count>maxCount) maxCount=count;
        let direction=[[1,0],[-1,0],[0,1],[0,-1]];
        for(let [dy,dx] of direction){
            let ny=y+dy;
            let nx=x+dx;
            if(ny<0||ny>=L||nx<0||nx>=W) continue;
            if(!visited[ny][nx]&&map[ny][nx]==="L"){
                visited[ny][nx]=1;
                way.push([ny,nx,count+1]);
                
            }
        }
    }
    maxList.push(maxCount);
}

for(let i=0;i<L;i++){
    for(let j=0;j<W;j++){
        if(map[i][j]==="L"){
            visited=Array.from({length:L},()=>new Array(W).fill(0));
            visited[i][j]=1;
            bfs([[i,j,0]]);
        }
    }
}

console.log(Math.max(...maxList))