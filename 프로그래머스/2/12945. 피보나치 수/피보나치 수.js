function solution(n) {
    let a=0;
    let b=1;
    for(let i=0;i<n;i++){
        let tmp=(a+b)%1234567;
        a=b;
        b=tmp;
    }
    return a%1234567;
}