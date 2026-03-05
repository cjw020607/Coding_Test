const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');
const N=+input[0];
let result=[];
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

const preorder=(node)=>{
    if(!node) return;
    result.push(node.value);
    preorder(node.left);
    preorder(node.right);
}

const inorder=(node)=>{
    if(!node) return;
    inorder(node.left);
    result.push(node.value);
    inorder(node.right);
}

const postorder=(node)=>{
    if(!node) return;
    postorder(node.left);
    postorder(node.right);
    result.push(node.value);
}

const nodes={};
let root;
for(let i=1;i<=N;i++){
    let [parent,left,right]=input[i].split(' ');

    if(i===1){
        root=parent;
    }
    if(!nodes[parent]){
        nodes[parent]=new Node(parent)
    }

    //왼쪽 자식
    if(left!=='.'){
        if(!nodes[left]){
            nodes[left]=new Node(left);
        }
        nodes[parent].left=nodes[left];
    }

    //오른쪽 자식
    if(right!=='.'){
        if(!nodes[right]){
            nodes[right]=new Node(right);
        }
        nodes[parent].right=nodes[right];
    }
}

//전위
preorder(nodes[root])
console.log(result.join(''))

//중위
result=[];
inorder(nodes[root])
console.log(result.join(''))

//후위
result=[];
postorder(nodes[root])
console.log(result.join(''))