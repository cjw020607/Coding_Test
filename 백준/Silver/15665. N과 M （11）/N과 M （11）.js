fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=input[1].split(' ').map(Number).sort((a,b)=>a-b);
let result=[];
let way=[];
const bt=()=>{
    for(let i=0;i<N;i++){
        if(way.length===M){
            result.push(way.join(' '));
            return;
        }
        way.push(arr[i]);
        bt();
        way.pop();
    }
}

bt();

result=new Set(result);
console.log([...result].join('\n'));