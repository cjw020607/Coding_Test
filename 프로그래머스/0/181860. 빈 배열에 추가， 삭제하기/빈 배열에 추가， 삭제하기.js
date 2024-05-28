function solution(arr, flag) {
    let X=[]
    for(let i=0;i<flag.length;i++){
        if(flag[i]===true){
            a=new Array(arr[i]*2).fill(arr[i])
        X=X.concat(a);
        }
        else{
            X=X.length>arr[i]?X.slice(0,X.length-arr[i]):[];
        }
    }
    return X;
}