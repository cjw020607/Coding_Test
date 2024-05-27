function solution(n) {
    return ~~(lcm(n,6)/6)
}
function gcd(a,b){
    while(b>0){
        const temp=a
        a=b
        b=temp%b
    }
        return a;

}

function lcm(a,b){
    return Math.abs(a*b)/gcd(a,b);
}