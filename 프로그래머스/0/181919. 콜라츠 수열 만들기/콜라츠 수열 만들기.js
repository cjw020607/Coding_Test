function solution(n) {
    let result = [n];
    while(true){
        if(n%2==0)
            n=~~(n/2);
        else
            n=n*3+1;
        result.push(n);
        if(n==1)
            return result
    }
}