function solution(order) {
    return String(order).split("").reduce((add,item)=>{
        if(item==="3"||item==="6"||item==="9")
            return add+1;
        return add
    },0)

}