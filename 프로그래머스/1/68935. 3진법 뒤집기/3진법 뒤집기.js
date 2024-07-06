function solution(n) {
    result='';
    while(n>=1){
        result+=Number(n%3);
        n=~~(n/3);
    }
    return parseInt(result,3);
}