function solution(arr, divisor) {
    let result=[];
    arr.forEach(item=>{
        if(item%divisor===0)
            result.push(item)
    })
    return result.length===0?[-1]:result.sort((a,b)=>a-b);
}