function solution(n, arr1, arr2) {
    let result = [];
    arr1.forEach((item,idx)=>{
    result.push((arr1[idx]|arr2[idx]).toString(2).padStart(n,"0").replaceAll("1","#").replaceAll("0"," "));
    })
    return result;
}