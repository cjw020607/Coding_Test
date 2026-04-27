const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [N,M]=input[0].split(' ').map(Number);
const graph=Array.from({length:N+1},()=>[]);
const indegree=new Array(N+1).fill(0);

for(let i=1;i<=M;i++){
    const [from, to]=input[i].split(' ').map(Number);
    graph[from].push(to);
    indegree[to]+=1;
}

const queue=[];
const result=[];

class MinHeap{
    constructor(){
        this.nodes=[];
    }

    push(value){
        this.nodes.push(value);
        this._up(this.nodes.length-1);
    }

    _up(idx){
        while(idx>0){
            let parent=(idx-1)>>1;
            if(this.nodes[idx]>=this.nodes[parent]) break;
            [this.nodes[idx],this.nodes[parent]]=[this.nodes[parent],this.nodes[idx]];
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
        while(true){
            let left=idx*2+1;
            let right=idx*2+2;
            let min=idx;
            if(this.nodes[left]<this.nodes[min]){
                min=left;
            }
            if(this.nodes[right]<this.nodes[min]){
                min=right;
            }
            if(min===idx) break;
            [this.nodes[idx],this.nodes[min]]=[this.nodes[min],this.nodes[idx]];
            idx=min;
        }
    }
    isEmpty(){
        return this.nodes.length===0;
    }
}

const heap = new MinHeap();

for(let i=1;i<=N;i++){
    if(indegree[i]===0){
        heap.push(i);
    }
}

while(!heap.isEmpty()){
    const cur=heap.pop();
    result.push(cur);

    for(let i=0;i<graph[cur].length;i++){
        let next=graph[cur][i];
        indegree[next]--;

        if(indegree[next]===0){
            heap.push(next);
        }
    }
}

console.log(result.join(' '))