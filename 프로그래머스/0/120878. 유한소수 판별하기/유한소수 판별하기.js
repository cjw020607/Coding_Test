function solution(a, b) {
    let d=gcd(a,b)
    b=b/d;
    while(b%2===0){
        b=b/2;
    }
    while(b%5===0){
        b=b/5;
    }
    return b===1?1:2;
}

function gcd(a,b){
    while(b>0){
        let temp=a%b;
        a=b;
        b=temp;
    }
    return a;
}