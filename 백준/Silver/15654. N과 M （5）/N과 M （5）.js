fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=input[1].split(' ').map(Number).sort((a,b)=>a-b);
let visited=new Array(N).fill(0);
const bt=(arr,way)=>{
    for(let i=0; i<N; i++){
        if(way.length===M){
            console.log(way.join(' '));
            return;
        }
        else if(visited[i]===0){
            visited[i]=1;
            way.push(arr[i])
            bt(arr,way);
            visited[i]=0;
            way.pop();
        }
    }
}

bt(arr,[])