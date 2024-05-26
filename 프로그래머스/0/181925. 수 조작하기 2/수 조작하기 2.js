function solution(numLog) {
    let result=[];
    for(let i=1;i<numLog.length;i++)
        result.push(numLog[i]-numLog[i-1]);
    return result.reduce((arr,item)=>item===1?arr+="w":item===-1?arr+="s":item===10?arr+="d":arr+="a","");
}