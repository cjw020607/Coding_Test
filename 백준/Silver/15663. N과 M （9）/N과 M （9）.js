fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=input[1].split(' ').map(Number).sort((a,b)=>a-b);
let result=[];
let way=[];
let visited=new Array(N).fill(0);


const bt=(index)=>{
 for(let i=0;i<N;i++){
  if(way.length===M){
   result.push(way.join(' '));
   return;
  }
  else if(visited[i]===0){
   visited[i]=1;
   way.push(arr[i]);
   bt(i+1);
   way.pop();
   visited[i]=0;
  }
 }
}

bt(0);
result=new Set(result);

console.log([...result].join('\n'));






