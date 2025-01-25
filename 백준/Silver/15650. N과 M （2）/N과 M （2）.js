fs=require('fs');
let [N,M]=fs.readFileSync(0).toString().split(' ').map(Number);
let visited=new Array(N).fill(0);
let arr=[]
for(let i=1;i<=N;i++){
    arr.push(i);
}

const bt=(arr,way,index)=>{
    for(let i=index; i<N; i++){
        if(way.length===M){
            console.log(way.join(' '));
            return;
        }
        else if(visited[i]===0){
            visited[i]=1;
            way.push(arr[i])
            bt(arr,way,i);
            visited[i]=0;
            way.pop();
        }
    }
}

bt(arr,[],0)

