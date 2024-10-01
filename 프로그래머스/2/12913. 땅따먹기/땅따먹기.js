function solution(land) {
    //top->down
    let N=land.length
    for(let i=1;i<N;i++){
        for(let j=0;j<4;j++){
            land[i][j]+=Math.max(...land[i-1].slice(0,j),...land[i-1].slice(j+1))
        }
    }
    return Math.max(...land[N-1])
}