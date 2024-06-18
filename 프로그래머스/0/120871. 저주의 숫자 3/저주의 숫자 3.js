function solution(n) {
    let i=1;
    let result=1;
    while(i<=n){
        if(result%3===0||String(result).includes('3')){
            result+=1;
            continue;
        }
        result+=1;
        i+=1;
        console.log(result)
    }
    return result-1;
}
