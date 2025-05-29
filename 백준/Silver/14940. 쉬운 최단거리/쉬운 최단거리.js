fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [n,m]=input[0].split(' ').map(Number);
let input_map=[];
let start;
for(let i=1;i<=n;i++){
    let a=input[i].split(' ').map(Number);
    input_map.push(a);
    if(a.includes(2)){
        start=[i-1,a.indexOf(2)]; //시작점 저장
    }
}

let visited=Array.from({length:n},()=>new Array(m).fill(0));
let [sy,st]=start;
//시작점 먼저 방문
visited[sy][st]=1;
input_map[sy][st]=0;
let way=[[sy,st,1]];
while(way.length>0){
    let [y,x,count]=way.shift();
    let distance=[[1,0],[-1,0],[0,1],[0,-1]];
    for(let [dy,dx] of distance){
        let ny=dy+y;
        let nx=dx+x;
        if(ny<0||nx<0||ny>=n||nx>=m) continue;
        //아직 방문 안했고 갈 수 있는 땅일 때
        if(!visited[ny][nx]&&input_map[ny][nx]===1){
            visited[ny][nx]=1;
            input_map[ny][nx]=count;
            way.push([ny,nx,count+1]);
        }
    }
}
let result=[];
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        //아직 방문 안했고 원래 갈 수 있는 땅
        if(!visited[i][j]&&input_map[i][j]===1){
            input_map[i][j]=-1;
        }
    }
    result.push(input_map[i].join(' '));
}

console.log(result.join('\n'))