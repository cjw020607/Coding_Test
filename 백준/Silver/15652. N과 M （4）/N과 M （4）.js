fs=require('fs');
let [N,M]=fs.readFileSync(0).toString().split(' ').map(Number);
let result=[];
let way=[];

const bt=(depth)=>{
 for(let i=depth;i<N;i++){
  if(way.length===M){
   result.push(way.join(' '));
   return;
  }
  way.push(i+1);
  bt(i);
  way.pop();
 }
}

bt(0);
console.log(result.join('\n'));


