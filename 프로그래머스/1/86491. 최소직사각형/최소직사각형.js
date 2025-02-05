function solution(sizes) {
    sizes.forEach(item=>item.sort((a,b)=>a-b));
    return Math.max(...sizes.map(item=>item[0]))*Math.max(...sizes.map(item=>item[1]));
}