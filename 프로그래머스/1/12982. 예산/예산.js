function solution(d, budget) {
    d.sort((a,b)=>a-b)
    let i=d.length
    while(d.slice(0,i).reduce((acc,item)=>acc+item,0)>budget)
        i-=1
    return i;
}