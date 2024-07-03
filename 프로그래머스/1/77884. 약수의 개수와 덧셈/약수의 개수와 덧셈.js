function solution(left, right) {
    let result=0;
    for(let i=left;i<=right;i++){
        if(Math.sqrt(i)==~~(Math.sqrt(i))){
            result-=i;
        }
        else
            result+=i;
        console.log(result)
    }
    return result;
}