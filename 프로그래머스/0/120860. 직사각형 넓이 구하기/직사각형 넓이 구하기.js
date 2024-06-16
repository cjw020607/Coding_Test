function solution(dots) {
    dots.sort((a,b)=>a[0]-b[0]||a[1]-b[1])
    return (dots[1][1]-dots[0][1])*(dots[2][0]-dots[0][0])
}