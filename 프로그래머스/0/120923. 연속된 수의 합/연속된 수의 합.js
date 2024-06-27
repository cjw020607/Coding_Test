function solution(num, total) {
    let result=[];
    let mid=~~(total/num);
    if(num%2==0){
        for(let i=mid-(num/2-1);i<mid;i++){
            result.push(i);
        }
        for(let i=mid;i<=mid+num/2; i++){
            result.push(i);
        }
    }
    else{
        for(let i=mid-(~~(num/2));i<mid;i++){
            result.push(i);
        }
        for(let i=mid;i<=mid+(~~(num/2)); i++){
            result.push(i);
        }
    }
    
    return result;
}