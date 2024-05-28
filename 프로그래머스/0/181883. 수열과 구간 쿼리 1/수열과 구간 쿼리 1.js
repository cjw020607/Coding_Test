function solution(arr, queries) {
    for(item of queries){
        let a=item[0];
        let b=item[1];
        for(let i=a;i<=b;i++)
            arr[i]+=1;
    }
    return arr;
}