fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let input_arr=[];
let visited=Array.from(new Array(N),()=>new Array(M).fill(0));
for(let i=1;i<=N;i++){
    input_arr.push(input[i].split(' ').map(Number));
}

let max=0;

const bfs=()=>{
    let virus=[];
    let count=0;
    let arr=JSON.parse(JSON.stringify(input_arr)); //복사
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(arr[i][j]===2){
                virus.push([i,j]);
                visited[i][j]=1;
            }
        }
    }
    while(virus.length>0){
        let [y,x]=virus.shift();
        let distance=[[0,-1],[0,1],[1,0],[-1,0]];
        for(let [dy,dx] of distance){
            let ny=y+dy;
            let nx=x+dx;
            if(nx<0||nx>=M||ny<0||ny>=N) continue;
            if(arr[ny][nx]===0&&visited[ny][nx]===0){
                arr[ny][nx]=2;
                virus.push([ny,nx]);
                visited[ny][nx]=0;
            }
        }
    }
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(arr[i][j]===0) count+=1
        }
    }
    max=Math.max(max,count)
}

//벽세우기(백트래킹)
const makeWall=(count)=>{
    if(count===3){
        bfs();
        return;
    } 
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(input_arr[i][j]===0){
                input_arr[i][j]=1; //벽 세우기
                makeWall(count+1);
                input_arr[i][j]=0; //벽 허물기
            }
        }
    }
}

makeWall(0)

console.log(max)