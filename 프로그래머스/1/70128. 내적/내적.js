function solution(a, b) {
    return a.reduce((acc,item,idx)=>acc+item*b[idx],0)
}