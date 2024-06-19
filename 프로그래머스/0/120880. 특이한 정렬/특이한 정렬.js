function solution(numlist, n) {
    numlist.sort((a,b)=>b-a)
    let distance=numlist.map(item=>Math.abs(item-n))
    let sorted_dist=[...distance].sort((a,b)=>a-b);
    sorted_dist=[...new Set(sorted_dist)];
    let result=[]
    sorted_dist.forEach(num=>{
    result=result.concat(numlist.filter(item=>{
        return Math.abs(item-n)===num
    }))
    })
    return result
}