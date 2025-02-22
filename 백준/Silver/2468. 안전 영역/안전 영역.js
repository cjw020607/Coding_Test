fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let arr=[];
let max=0;
for(let i=1;i<=N;i++){
    let a=input[i].split(' ').map(Number);
    arr.push(a);
    max=Math.max(Math.max(...a),max);
}

let visited=Array.from(new Array(N),()=>new Array(N).fill(0));

const bfs=(depth,i,j)=>{
    let group=[[i,j]];
    visited[i][j]=1;
    while(group.length>0){
        let [y,x]=group.shift();
        let distance=[[0,-1],[0,1],[1,0],[-1,0]];
        for(let [dy,dx] of distance){
            let ny=y+dy;
            let nx=x+dx;
            if(ny<0||ny>=N||nx<0||nx>=N) continue;
            if(arr[ny][nx]>depth&&visited[ny][nx]===0){
                visited[ny][nx]=1;
                group.push([ny,nx]);
            }   
        }
    }
}

let result=0;

//높이
for(let d=0;d<=max;d++){
    let count=0;
    visited=Array.from(new Array(N),()=>new Array(N).fill(0));
    //bfs
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(visited[i][j]===0&&arr[i][j]>d){
                bfs(d,i,j);
                count+=1;
            }
        }
    }
    result=Math.max(count,result);
}

console.log(result);