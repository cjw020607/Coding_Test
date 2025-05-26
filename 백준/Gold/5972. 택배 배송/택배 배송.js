fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let [N,M]=input[0].split(' ').map(Number);
let nearby_node=Array.from({length:N+1},()=>[]);

//인접 행렬
for(let i=1;i<=M;i++){
    let [A,B,C]=input[i].split(' ').map(Number);
    nearby_node[A].push([B,C]) //[인접 노드 번호, 비용]
    nearby_node[B].push([A,C]) //양방향
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(node) {
        this.heap.push(node);
        this._bubbleUp();
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return top;
    }
    _bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element[1] >= parent[1]) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }
    _bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild[1] < element[1]) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild[1] < element[1]) ||
                    (swap !== null && rightChild[1] < leftChild[1])
                ) swap = rightChildIdx;
            }

            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

const heap=new MinHeap; //방문해야 할 배열
heap.push([1,0]);
let dist=new Array(N+1).fill(Infinity); //노드별 비용 최소값
dist[1]=0;

while(!heap.isEmpty()){
    let [curNode,curCost]=heap.pop();
    for(let [nextNode,nextCost] of nearby_node[curNode]){
        if(dist[nextNode]<curCost) continue;
        let totalCost=curCost+nextCost;
        if(totalCost<dist[nextNode]){
            dist[nextNode]=totalCost;
            heap.push([nextNode,totalCost]);
        }
    }
}

console.log(dist[N])