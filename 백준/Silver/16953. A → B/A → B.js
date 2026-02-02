const fs=require('fs');
const [A,B]=fs.readFileSync(0).toString().trim().split(' ').map(Number);

let visited=[];

let idx=0;
let queue=[[A,1]];
visited.push(A);
while(idx<queue.length){
    let [num,count]=queue[idx++];
    if(num===B){
        console.log(count)
        return;
    }
    if(num*2<=B&&!visited[num*2]){
        visited.push(num*2);
        queue.push([num*2,count+1]);
    }
    if(num*10+1<=B&&!visited[num*10+1]){
        visited.push(num*10+1);
        queue.push([num*10+1,count+1]);
    }
}

console.log(-1);