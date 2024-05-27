function solution(a, d, included) {
    return included.reduce((acc,item,idx)=>{
        if(item)
            return acc+a+d*(idx)
        return acc
    },0);

}