function solution(balls, share) {
   let n = BigInt(1);
    let m = BigInt(1);
    let nm = BigInt(1);
    
    for (let i = balls; i >= 1; i--) {
        n *= BigInt(i);
    }
    for (let i = share; i >= 1; i--) {
        m *= BigInt(i);
    }
    for (let i = balls - share; i >= 1; i--) {
        nm *= BigInt(i);
    }
        return n / (nm * m);

}