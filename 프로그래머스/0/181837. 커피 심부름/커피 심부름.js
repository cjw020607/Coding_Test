function solution(order) {
    let result=0
    for(item of order){
        if(item.includes("americano")||item=="anything")
            result+=4500;
        else if(item.includes("cafelatte"))
            result+=5000;
    }
    return result;
}
