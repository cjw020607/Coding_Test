function solution(s) {
    let l=s.split(" ").map(i=>Number(i))
    return `${Math.min(...l)} ${Math.max(...l)}`
}