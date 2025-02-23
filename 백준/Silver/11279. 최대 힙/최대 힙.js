fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let N=+input[0];
let input_arr=[];
for(let i=1;i<=N;i++){
    input_arr.push(+input[i]);
}

class maxHeap{
    constructor(){
        this.nodes=[];
    }

    insert(data){
        this.nodes.push(data);
        this.bubbleUp();
    }
    bubbleUp(index=this.nodes.length-1){
        if(index<1) return;
        let currentNode=this.nodes[index];
        let parentIndex=Math.floor((index-1)/2);
        let parentNode=this.nodes[parentIndex];
        if(parentNode>=currentNode) return;
        this.nodes[parentIndex]=currentNode;
        this.nodes[index]=parentNode;
        index=parentIndex;
        this.bubbleUp(index);
    }
    extract(){
        const max=this.nodes[0];
        if(this.nodes.length===1){
            this.nodes.pop();
            return max;
        }
        this.nodes[0]=this.nodes.pop();
        this.trickleDown();
        return max;
    }

    trickleDown(index=0){
        let leftChildIndex=index*2+1;
        let rightChildIndex=index*2+2;
        let length=this.nodes.length;
        let maximum=index;

        //자식이 둘 다 없을 때
        if(!this.nodes[leftChildIndex]&&!this.nodes[rightChildIndex]) return;
        //왼쪽 자식만 있을 때
        if(!this.nodes[rightChildIndex]){
            if(this.nodes[leftChildIndex]>this.nodes[maximum]){
                maximum=leftChildIndex;
            }
        }
        //자식 둘 다 있을 때
        if(this.nodes[leftChildIndex]<this.nodes[rightChildIndex]){
            if(this.nodes[rightChildIndex]>this.nodes[maximum]){
                maximum=rightChildIndex;
            }
        }else{
            if(this.nodes[leftChildIndex]>this.nodes[maximum]){
                maximum=leftChildIndex;
            }
        }

        if(maximum!==index){
            let t=this.nodes[maximum];
            this.nodes[maximum]=this.nodes[index];
            this.nodes[index]=t;
            this.trickleDown(maximum);
        }
    }
    
}

const heap=new maxHeap();
let result=[];

input_arr.forEach((input_arr,index)=>{
    if(input_arr!==0){
        heap.insert(input_arr);
    }else{
        if(heap.nodes.length===0){
            result.push(0);
        }else{
            let t=heap.extract();
            result.push(t);
        }
    }
})

console.log(result.join('\n'))