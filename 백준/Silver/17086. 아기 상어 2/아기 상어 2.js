let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let input_arr=[];
for(let i=1;i<=N;i++){
    input_arr.push(input[i].split(' ').map(Number));
}
let max=0;
let visited=Array.from({length:N},()=>new Array(M).fill(0));

const bfs=(i,j,d)=>{
    let way=[[i,j,d]];
    while(way.length>0){
        let [y,x,dist]=way.shift();
        let direction=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
        for(let [dy,dx] of direction){
            let ny=y+dy;
            let nx=x+dx;
            if(ny<0||ny>=N||nx<0||nx>=M) continue;
            if(input_arr[ny][nx]===1){
                max=Math.max(max,dist+1);
                return;
            }
            else if(!visited[ny][nx]){
                visited[ny][nx]=1;
                way.push([ny,nx,dist+1]);
            } 
        }
    }

    
}

for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
        if(input_arr[i][j]===0){
            visited=Array.from({length:N},()=>new Array(M).fill(0));
            bfs(i,j,0);
        }
    }
}

console.log(max)