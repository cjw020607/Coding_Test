function solution(triangle) {
    let h=triangle.length;
    for(let i=h-1;i>0;i--){
        for(let j=0;j<i;j++){
            triangle[i-1][j]+=Math.max(triangle[i][j],triangle[i][j+1])
        }
    }
    return triangle[0][0];
    
}