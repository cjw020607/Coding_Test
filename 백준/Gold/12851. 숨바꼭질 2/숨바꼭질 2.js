const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');
const [N,K]=input[0].split(' ').map(Number);
const MAX = 100001;
let min_arr=Array.from({length:MAX},()=>[Infinity,0]);


const bfs=()=>{
    let queue=[[N,0]];
    min_arr[N]=[0,1];
    let i=0;
    while(i<queue.length){
        let [n,d]=queue[i++];
        let next=[n*2,n+1,n-1];
        for(let nn of next){
            if(nn>=MAX||nn<0) continue;
            
            if(min_arr[nn][0]>d+1){
                min_arr[nn]=[d+1,min_arr[n][1]];
                queue.push([nn,d+1]);
            }else if(min_arr[nn][0]===d+1){
                min_arr[nn][1]+=min_arr[n][1];
            }
        }
    }
}
bfs();
console.log(min_arr[K].join('\n'))