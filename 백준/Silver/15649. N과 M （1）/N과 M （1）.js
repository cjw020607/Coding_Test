fs=require('fs');
input=fs.readFileSync(0).toString().split(' ');
let N=+input[0];
let M=+input[1];
let arr=[];
let visited=new Array(N).fill(0);
for(let i=1; i<=N;i++){
    arr.push(i);
}

const bt=(arr,way)=>{
    if(way.length===M){
        console.log(way.join(' '));
        return;
    }
    for(let i=0; i < N; i++){
        if(visited[i]===0){
            visited[i]=1;
            way.push(arr[i])
            bt(arr,way);
            visited[i]=0;
            way.pop()
        }
    }
}

bt(arr,[])
