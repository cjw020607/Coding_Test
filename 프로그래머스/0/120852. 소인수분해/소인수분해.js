function solution(n) {
    let result=[]
    let i=2;
    while(n!=1){
        if(n%i==0){
            n=n/i;
            if(!result.includes(i))
                result.push(i);
        }
        else
            i+=1;
    }
    return result;
}