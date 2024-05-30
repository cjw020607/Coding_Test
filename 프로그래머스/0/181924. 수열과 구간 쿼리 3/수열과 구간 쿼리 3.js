function solution(arr, queries) {
    for(item of queries){
        let a=item[0];
        let b=item[1];
        let temp =arr[a];
        arr[a]=arr[b];
        arr[b]=temp;
    }
    return arr;
}