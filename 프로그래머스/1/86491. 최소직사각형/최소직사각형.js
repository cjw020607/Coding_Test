function solution(sizes) {
    return Math.max(...sizes.map(item=>Math.min(...item)))*Math.max(...sizes.map(item=>Math.max(...item)));
}