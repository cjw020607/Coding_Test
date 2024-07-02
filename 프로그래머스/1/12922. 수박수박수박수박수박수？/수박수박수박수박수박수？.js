function solution(n) {
    let a= '수박'.repeat(~~((n+1)/2));
    return a.slice(0,n);
}