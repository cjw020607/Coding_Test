const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [N,E]=input[0].split(' ').map(Number);
const graph=Array.from({length:N+1},(()=>[]));

for(let i=1;i<=E;i++){
    const [a,b,c]=input[i].split(' ').map(Number);
    graph[a].push([b,c]);
    graph[b].push([a,c]);
}

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
            [this.nodes[parent],this.nodes[idx]]=[this.nodes[idx],this.nodes[parent]];
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

            [this.nodes[smallest],this.nodes[idx]]=[this.nodes[idx],this.nodes[smallest]];
            idx=smallest;
        }
    }

    isEmpty(){
        return this.nodes.length===0;
    }
}


const dijkstraAll=(start)=>{
    const dist=new Array(N+1).fill(Infinity);
    let pq=new MinHeap();
    dist[start]=0;
    pq.push([start,0]);
    while(!pq.isEmpty()){
        let [current,cost]=pq.pop();
        if(cost>dist[current]) continue;
        for(let [next,nextCost] of graph[current]){
            let newCost=cost+nextCost;
            if(newCost<dist[next]){
                dist[next]=newCost;
                pq.push([next,newCost]);
            }
        }
    }
    return dist;
}

const [A,B]=input[E+1].split(' ').map(Number);

let distFrom1=dijkstraAll(1); 
let distFromA=dijkstraAll(A); 
let distFromB=dijkstraAll(B);

let path1=distFrom1[A]+distFromA[B]+distFromB[N];
let path2=distFrom1[B]+distFromB[A]+distFromA[N];

let min=Math.min(path1,path2);
console.log(min===Infinity?-1:min);
