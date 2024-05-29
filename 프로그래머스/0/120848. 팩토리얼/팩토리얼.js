function solution(n) {
    let result=1;
    let i=1;
    while(n>=result){
        result*=i
        i+=1
    }
    return i-2;
}