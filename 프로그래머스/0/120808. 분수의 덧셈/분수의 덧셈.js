function solution(numer1, denom1, numer2, denom2) {
    let numer=numer1*denom2+numer2*denom1;
    let denom=denom1*denom2
    let div=gcd(numer,denom)
    return [numer/div,denom/div];
}

function gcd(a,b){
    while(b>0){
        let temp=a%b;
        a=b;
        b=temp;
    }
    return a
}