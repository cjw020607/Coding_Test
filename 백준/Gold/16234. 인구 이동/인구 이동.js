let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,L,R]=input[0].split(' ').map(Number);
let land=[];
for(let i=1;i<=N;i++){
    land.push(input[i].split(' ').map(Number));
}

const bfs=(way,visited,group,group_location)=>{
    while(way.length>0){
        let [y,x]=way.shift();
        let destination=[[1,0],[-1,0],[0,1],[0,-1]];
        for(let [dy,dx] of destination){
            let ny=y+dy;
            let nx=x+dx;
            if(ny<0||ny>=N||nx<0||nx>=N) continue;
            let diff=Math.abs(land[ny][nx]-land[y][x]);
            // console.log(diff, land[ny][nx],land[y][x])
            if(!visited[ny][nx]&&diff>=L&&diff<=R){
                visited[ny][nx]=1;
                way.push([ny,nx]);
                group.push(land[ny][nx]);
                group_location.push([ny,nx]);
            }
        }
    }
}

let count=0;

while(true){
    let visited=Array.from({length:N},()=>new Array(N).fill(0));
    let isLast=true;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(!visited[i][j]){
                let group=[land[i][j]];
                let group_location=[[i,j]];
                let way=[[i,j]];
                visited[i][j]=1;
                bfs(way,visited,group,group_location);
                if(group.length>1){
                    isLast=false;
                }
                let sum=group.reduce((acc,item)=>acc+=item,0);
                let avg=~~(sum/group.length);
                for(let [y,x] of group_location){
                    land[y][x]=avg;
                }
            }
        }
    }
    
    if(isLast) break;
    count+=1;
}
console.log(count)