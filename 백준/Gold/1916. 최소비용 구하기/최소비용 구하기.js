const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const N=+input[0];
const M=+input[1];

//인접 리스트
const graph = Array.from({length:N+1},()=>[]);

for(let i=2;i<2+M;i++){
    const [a,b,c]=input[i].split(' ').map(Number);
    graph[a].push([b,c]);
}

const [start,end]=input[M+2].split(' ').map(Number);

//최소 힙
class MinHeap{
    constructor(){
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
            [this.nodes[parent],this.nodes[idx]]=[this.nodes[idx],this.nodes[parent]]; //부모랑 위치 변경
            idx=parent;
        }
    }

    pop(){
        if(this.nodes.length===1) return this.nodes.pop();
        const min=this.nodes[0];
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

            if(left<len&&this.nodes[left][1]<this.nodes[smallest][1]){
                smallest=left;
            }
            if(right<len&&this.nodes[right][1]<this.nodes[smallest][1]){
                smallest=right;
            }
            if(smallest===idx) break;

            [this.nodes[idx],this.nodes[smallest]]=[this.nodes[smallest],this.nodes[idx]];
            idx=smallest;
        }
    }
    isEmpty(){
        return this.nodes.length===0;
    }
}

//다익스트라
const dist=Array(N+1).fill(Infinity);
dist[start]=0;

const pq=new MinHeap();
pq.push([start,0]);

while(!pq.isEmpty()){
    const [cur,cost]=pq.pop();
    if(cost>dist[cur]) continue;
    if(cur===end) break; //종점

    for(const [next,w] of graph[cur]){
        const nextCost=cost+w;
        if(nextCost<dist[next]){
            dist[next]=nextCost;
            pq.push([next,nextCost]);
        }
    }
    
}

console.log(dist[end])