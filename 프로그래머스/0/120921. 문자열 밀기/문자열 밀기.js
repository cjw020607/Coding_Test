function solution(A, B) {
    for(let i=0;i<=A.length;i++){
        if(JSON.stringify(A)===JSON.stringify(B))
            return i;
        A=A[A.length-1]+A.slice(0,A.length-1);
    }
    return -1;
}