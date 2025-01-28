fs=require('fs');
input=fs.readFileSync(0).toString().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let arr=input[1].split(' ').map(Number).sort((a,b)=>a-b);
let way=[];
let result=[];

const bt=(index)=>{
 for(let i=index;i<N;i++){
  if(way.length===M){
   result.push(way.join(' '));
   return;
  }
  way.push(arr[i]);
  bt(i);
  way.pop();
 }
}

bt(0);
console.log(result.join('\n'));