function solution(arr) {
    let i=0
    while(arr.length>2**i){
        i+=1;
    }
    let end=2**i-arr.length;
    for(let k=0;k<end;k++){
        arr.push(0);
    }
    return arr;
}


