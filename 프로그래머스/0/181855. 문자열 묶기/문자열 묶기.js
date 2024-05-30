function solution(strArr) {
    let len=strArr.map(item=>item.length);
    let a=new Array(Math.max(...len)+1).fill(0)
    len.forEach(item=>a[item]+=1)
    return Math.max(...a);
}