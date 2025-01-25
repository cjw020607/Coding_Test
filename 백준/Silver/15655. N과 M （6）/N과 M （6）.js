fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=input[1].split(' ').map(Number).sort((a,b)=>a-b);
const bt=(arr,way,index)=>{
    for(let i=index; i<=N; i++){
        if(way.length===M){
            console.log(way.join(' '));
            return;
        }
        else{
            way.push(arr[i]);
            bt(arr,way,i+1);
            way.pop(); 
        }
    }
}

bt(arr,[],0);