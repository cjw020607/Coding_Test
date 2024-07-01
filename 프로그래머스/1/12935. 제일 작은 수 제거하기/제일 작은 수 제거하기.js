function solution(arr) {
    let m=Math.min(...arr);
    let result=arr.filter(a=>a!==m)
    return result.length===0?[-1]:result;
}