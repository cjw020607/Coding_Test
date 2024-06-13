function solution(sides) {
    
    let m=Math.max(...sides);
    let n=sides[0]+sides[1]-m;
    return 2*n-1;

}
