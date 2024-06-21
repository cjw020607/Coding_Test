function solution(arr, query) {
    query.forEach((item,idx)=>arr=(idx%2==0?arr.slice(0,item+1):arr.slice(item)))
    return arr;
}