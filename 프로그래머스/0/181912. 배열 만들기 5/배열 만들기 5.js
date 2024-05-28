function solution(intStrs, k, s, l) {
    return intStrs.reduce((result,item)=>{
        +(item.slice(s,s+l))>k?result.push(+(item.slice(s,s+l))):result
    return result
    },[]
                         );
}