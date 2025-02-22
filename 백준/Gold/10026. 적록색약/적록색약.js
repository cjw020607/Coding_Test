fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let arr=[];
for(let i=1;i<=N;i++){
    arr.push(input[i].split(''));
}
let visited=Array.from(new Array(N),()=>new Array(N).fill(0));

const bfs=(start,i,j)=>{
    let group=[[i,j]];
    visited[i][j]=1;
    while(group.length>0){
        let [y,x]=group.shift();
        let distance=[[0,1],[0,-1],[-1,0],[1,0]];
        for (let [dy,dx] of distance){
            let ny=y+dy;
            let nx=x+dx;
            if(ny<0||ny>=N||nx<0||nx>=N) continue;
            if(arr[ny][nx]===start&&visited[ny][nx]===0){
                visited[ny][nx]=1;
                group.push([ny,nx]);
            }
        }
    }
}

let result=0;

//적약색 아닌 사람
for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(visited[i][j]===0){
            bfs(arr[i][j],i,j);
            result+=1;
        }
    }
}
console.log(result);

result=0;

//R를 G로 변경
for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(arr[i][j]==='R'){
            arr[i][j]='G';
        }
        //방문 초기화
        visited[i][j]=0;
    }
}

//적약색인 사람
for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(visited[i][j]===0){
            bfs(arr[i][j],i,j);
            result+=1;
        }
    }
}
console.log(result)