function solution(array) {
    return array.join('').split('').reduce((sum,item)=>{
        if(item==="7"){
            return sum+1;
        }
        return sum;
    },0)
}