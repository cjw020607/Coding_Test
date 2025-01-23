fs=require('fs');
input=fs.readFileSync(0).toString().split(' ');
let N=+input[0];
let K=+input[1];
let queue=[[N,0]];
let M=Math.max(N,K);
let visited=new Array(M*2).fill(0);
visited[N]=1;
let result=0;

while(queue.length>0){
 let [a,time]=queue[0];
 if(a===K){
   result=time;
   queue=[];
 }
 queue.shift();
 let linked=[a-1,a+1,a*2];
 for(point of linked){
  if(visited[point]===0 && point>=0 && point<M*2){
   visited[point]=1;
   queue.push([point,time+1]);
  }
 }
}
(N===0&&K===0)?console.log(0):console.log(result)




