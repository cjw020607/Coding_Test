const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('');

const priority={
    '+':1,
    '-':1,
    '*':2,
    '/':2
}
const opStack=[];
const result=[];

for(let i=0;i<input.length;i++){
    const cur=input[i];
    //알파벳일 경우
    if(/[A-Z]/.test(cur)){
        result.push(cur);
    }else if(cur==="("){
        opStack.push(cur);
    }else if(cur===")"){
        while(opStack.length&&opStack[opStack.length-1]!=="("){
            result.push(opStack.pop());
        }
        opStack.pop();
    }
    //연산자일 경우
    else{
        while(opStack.length&&priority[opStack[opStack.length-1]]>=priority[cur]){
            result.push(opStack.pop());
        }
        opStack.push(cur);
    }
}

while(opStack.length>0){
    result.push(opStack.pop());
}

console.log(result.join(''))