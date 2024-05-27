function solution(my_string, m, c) {
    return my_string.split("").reduce((add,item,idx)=>{
        if(idx%m===c-1)
            return add+item;
        return add;
    },"")

}