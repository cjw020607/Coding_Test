fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [R,C,K]=input[0].split(' ').map(Number);
let input_arr=[];
for(let i=1;i<=R;i++){
    input_arr.push(input[i].split(''))
}

let result=[];
let visited=Array.from({length:R},()=>new Array(C).fill(0));
visited[R-1][0]=1
let bfs=(x,y,count)=>{
    if(x===C-1&&y===0){
        result.push(count);
        return;
    }
    let direction=[[0,1],[0,-1],[1,0],[-1,0]];
    for(let [dy,dx] of direction){
        let ny=y+dy;
        let nx=x+dx;
        if(ny<0||ny>=R||nx<0||nx>=C) continue;
        if(!visited[ny][nx]&&input_arr[ny][nx]!=="T"){
            visited[ny][nx]=1;
            count+=1;
            bfs(nx,ny,count);
            visited[ny][nx]=0;
            count-=1;
        }
    }
    return;
}

bfs(0,R-1,1);
let total=result.reduce((acc,item)=>{
    if(item===K) acc+=1;
    return acc;
},0);
console.log(total);