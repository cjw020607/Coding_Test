function solution(a, b, n) {
    let result = 0;
    while(~~(n/a)>0){
        let left= n%a;
        let add=~~(n/a)*b;
        result+=add;
        n=add+left;
    }
    return result;
}