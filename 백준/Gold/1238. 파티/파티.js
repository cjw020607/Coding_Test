const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [N,M,X]=input[0].split(' ').map(Number);

const graph=Array.from({length:N+1},(()=>[]));
for(let i=1;i<=M;i++){
    let [a,b,c]=input[i].split(' ').map(Number);
    graph[a].push([b,c]);
}

class MinHeap{
    constructor() {
        this.nodes=[];
    }

    push(item){
        this.nodes.push(item);
        this._up(this.nodes.length-1);
    }
    
    _up(idx){
        while(idx>0){
            const parent=(idx-1)>>1;
            if(this.nodes[parent][1]<=this.nodes[idx][1]) break;
            [this.nodes[parent],this.nodes[idx]]=[this.nodes[idx],this.nodes[parent]];
            idx=parent;
        }
    }
    pop(){
        if(this.nodes.length===1) return this.nodes.pop();
        let min=this.nodes[0];
        this.nodes[0]=this.nodes.pop();
        this._down(0);
        return min;
    }

    _down(idx){
        const len=this.nodes.length;
        while(true){
            let left=idx*2+1;
            let right=idx*2+2;
            let smallest=idx;
            if(left<len&&this.nodes[smallest][1]>this.nodes[left][1]){
                smallest=left;
            }
            if(right<len&&this.nodes[smallest][1]>this.nodes[right][1]){
                smallest=right;
            }
            if(smallest===idx) break;
            [this.nodes[smallest],this.nodes[idx]]=[this.nodes[idx],this.nodes[smallest]];
            idx=smallest;
        }
    }
    isEmpty(){
        return this.nodes.length===0;
    }
}

let startResult=[0];
let endResult;
for(let i=1;i<=N;i++){
    const heap=new MinHeap();
    const dist=new Array(N+1).fill(Infinity);
    dist[i]=0;
    heap.push([i,0]);
    while(!heap.isEmpty()){
        let [start,totalCost]=heap.pop();
        if(totalCost>dist[start]) continue;
        for(let [end,cost] of graph[start]){
            let newCost=totalCost+cost;
            if(dist[end]>newCost){
                dist[end]=newCost;
                heap.push([end,newCost]);
            }
        }
    }
    startResult.push(dist[X]);
    if(i===X) endResult=dist;
}

let max=0;

for(let i=1;i<=N;i++){
    max=Math.max(max,startResult[i]+endResult[i]);
}

console.log(max)
