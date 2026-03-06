const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

const postorder=(node)=>{
    if(!node) return;
    postorder(node.left);
    postorder(node.right);
    console.log(node.value)
}

const arr=input.map(Number);
const root=new Node(arr[0]);
const stack=[root];

for(let i=1;i<arr.length;i++){
    let node=new Node(arr[i]);
    let parent=null;

    //stack의 마지막 값이 현재 노드보다 작을 때까지만 돎
    while(stack.length&&stack[stack.length-1].value<node.value){
        parent=stack.pop();
    }

    if(parent){
        parent.right=node;
    }else{
        stack[stack.length-1].left=node;
    }
    stack.push(node);
}

postorder(root);
