function solution(s){
    let stack=[];
    let result=true
    s=s.split("");
    s.forEach(item=>{
        if(item==="(")
            stack.push(item);
        else if(item===")"){
            if(stack.length===0)
                result=false
            stack.pop();
        }
    });
    return stack.length===0&&result;
}