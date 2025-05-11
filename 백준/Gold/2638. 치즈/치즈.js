fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let input_arr=[];
for(let i=1;i<=N;i++){
    input_arr.push(input[i].split(' ').map(Number))
}

let visited=Array.from(Array(N),()=>new Array(M).fill(0));

let direction=[[0,1],[0,-1],[1,0],[-1,0]];
const bfs=()=>{
    let way=[[0,0]];
    visited[0][0]=1;
    input_arr[0][0]=-1;
    while(way.length>0){
        let [y,x]=way.shift();
        for(let [dy,dx] of direction){
            let ny=y+dy;
            let nx=x+dx;
            if(ny<0||nx<0||ny>=N||nx>=M) continue;
            if(!visited[ny][nx]&&input_arr[ny][nx]!==1){
                visited[ny][nx]=1;
                input_arr[ny][nx]=-1;
                way.push([ny,nx]);
            }
        }
    }
}
let result=0;
while(true){
    visited=Array.from(Array(N),()=>new Array(M).fill(0));

    //외부 공기는 -1로 변환하고 내부 흰색은 그대로 0 유지
    bfs();

    let C=[];
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            let [y,x]=[i,j];
            let count=0;
            //치즈가 있을 때만
            if(input_arr[y][x]===1){
                for(let [dy,dx] of direction){
                    let ny=y+dy;
                    let nx=x+dx;
                    //접촉 부분이 외부 공기일때만
                    if(input_arr[ny][nx]===-1) count+=1;
                }
                //2번 이상 접촉하면 C에 추가
                if(count>=2) C.push([y,x]);
            }
        }
    }
    for(let [y,x] of C){
        //치즈 녹임
        input_arr[y][x]=-1;
    }
    if(C.length===0) break;
    result+=1;
}

console.log(result)
