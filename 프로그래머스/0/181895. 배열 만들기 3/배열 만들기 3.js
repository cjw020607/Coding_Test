function solution(arr, intervals) {
    let result=[];
    intervals.forEach(([a,b])=>result.push(...arr.slice(a,b+1)))
    return result;
}