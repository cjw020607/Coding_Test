const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const T=+input[0];
let visited=new Array(10000).fill(0);

const bfs=(a,b)=>{
    const queue=[[a,'']];
    visited[a]=1;
    let idx=0;
    while(queue.length>idx){
        let [num,d]=queue[idx];
        if(num===b){
            return d;
        }
        let direction=["D","S","L","R"];
        for(let nd of direction){
            let tmp;
            if(nd==="D"){
                tmp=(num*2)%10000;
            }else if(nd==="S"){
                if(num===0){
                    tmp=9999;
                }else{
                    tmp=num-1;
                }
            }else if(nd==="L"){
                tmp=(num%1000)*10+Math.floor(num/1000)
            }else if(nd==="R"){
                tmp=Math.floor(num/10)+(num%10)*1000
            }

            if(!visited[tmp]){
                visited[tmp]=1;
                queue.push([tmp,d+nd]);
            }
        }
        idx++;
    }
}

for(let i=1;i<=T;i++){
    const [A,B]=input[i].split(' ').map(Number);
    visited=new Array(10000).fill(0);
    let result=bfs(A,B);    
    console.log(result);
}
