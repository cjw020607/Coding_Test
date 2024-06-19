function solution(l, r) {
    let result=[]
    for(let i=l;i<=r;i++){
        let s=true;
        i=String(i)
        for(let j=0;j<i.length;j++){
            if(i[j]!=5&&i[j]!=0){
                s=false;
                break;
            }
        }
        if(s===true)
            result.push(Number(i))
    }
    return result.length!=0?result:[-1];
}