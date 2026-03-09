const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const [V,E]=input[0].split(' ').map(Number);
const K=+input[1];

let graph=Array.from({length:V+1},()=>[]);

for(let i=2;i<E+2;i++){
    let [u,v,w]=input[i].split(' ').map(Number);
    graph[u].push([v,w]);
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
            let parent=(idx-1)>>1;
            if(this.nodes[parent][1]<this.nodes[idx][1]) break;
            [this.nodes[parent],this.nodes[idx]]=[this.nodes[idx],this.nodes[parent]];
            idx=parent;
        }
    }
    pop(){
        if(this.nodes.length<=1) return this.nodes.pop();
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
            let len=this.nodes.length;
            if(left<len&&this.nodes[left][1]<this.nodes[min][1]){
                min=left;
            }
            if(right<len&&this.nodes[right][1]<this.nodes[min][1]){
                min=right;
            }
            if(min===idx) break;
            [this.nodes[min],this.nodes[idx]]=[this.nodes[idx],this.nodes[min]];
            idx=min;
        }
    }

    isEmpty(){
        return this.nodes.length===0;
    }
    
}

let dist=new Array(V+1).fill(Infinity);
dist[K]=0;
let heap=new MinHeap();
heap.push([K,0]);
while(!heap.isEmpty()){
    let [cur,weight]=heap.pop();
    if(dist[cur]<weight) continue;
    for(let [next,nextWeight] of graph[cur]){
        let newWeight=weight+nextWeight;
        if(dist[next]>newWeight){
            dist[next]=newWeight;
            heap.push([next,newWeight]);
        }
    }
    
}

for(let i=1;i<V+1;i++){
    if(dist[i]===Infinity){
        console.log("INF");
    }else{
        console.log(dist[i]);
    }
}
