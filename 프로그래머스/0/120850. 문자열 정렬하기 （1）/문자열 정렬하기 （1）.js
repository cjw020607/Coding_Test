function solution(my_string) {
    return my_string.split("")
        .reduce((list,item)=>{
        if(!isNaN(item))
            list.push(Number(item))
        
        return list;
    },[]).sort((a,b)=>a-b);

}