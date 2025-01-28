fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let way=[]
const bt=(index)=>{
    for(let i=index-1; i<N; i++){
        if(way.length===M){
            console.log(way.join(' '));
            return;
        }
        else{
            way.push(i+1);
            bt(i+1);
            way.pop(); 
        }
    }
}

bt(1);