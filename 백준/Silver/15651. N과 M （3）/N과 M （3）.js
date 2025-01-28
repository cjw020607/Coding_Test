fs=require('fs');
let [N,M]=fs.readFileSync(0).toString().split(' ').map(Number);
let way=[];
let result=[];


const bt=(depth)=>{
    for(let i=0; i<N; i++){
        if(depth===M){
            result.push(way.join(' '));
            return;
        }
        else {
            way.push(i+1);
            bt(depth+1);
            way.pop();
        }
    }
}

bt(0);

console.log(result.join('\n'));