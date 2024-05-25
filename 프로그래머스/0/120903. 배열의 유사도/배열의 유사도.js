function solution(s1, s2) {
    let count=0;
    s1.map(item=>s2.includes(item)?count+=1:null)
    return count;
}