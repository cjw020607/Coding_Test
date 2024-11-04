function solution(s)
{
    let stack=[s[0]];
    let i=1
    while(i<s.length){
        if(stack===[]||stack[stack.length-1]!==s[i])
            stack.push(s[i]);
        else
            stack.pop();
        i+=1
    }
    return stack.length?0:1
}