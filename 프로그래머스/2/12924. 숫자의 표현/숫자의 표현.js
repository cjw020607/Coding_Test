function solution(n) {
    let result=0
    for(let i=1;i<n+1;i+=2){
        if(n%i===0)
            result+=1;
    }
    return result;
}