fs=require('fs');
input=fs.readFileSync(0).toString().trim().split('\n');
let n=+input[0];
let target=[];
for(let i=1;i<=n;i++){
    target.push(+input[i]);
}

let num=1;
let stack=[];
let result=[];
for(let i=0;i<n;i++){
    let curr=target[i];
    while(num<=curr){
        result.push("+");
        stack.push(num++);
    }
    let last=stack[stack.length-1];
    if(last===curr){
        result.push("-");
        stack.pop();
    }else{
        console.log("NO");
        return;
    }
}
console.log(result.join("\n"))