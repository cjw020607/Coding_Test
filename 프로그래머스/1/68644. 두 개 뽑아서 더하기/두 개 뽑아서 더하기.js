function solution(numbers) {
    let l=numbers.length;
    let result=[]
    for(let i=0;i<l;i++){
        for(let j=i+1;j<l;j++){
            result.push(numbers[i]+numbers[j]);
        }
    }
    return [...new Set(result)].sort((a,b)=>a-b)

}