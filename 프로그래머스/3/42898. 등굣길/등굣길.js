function solution(m, n, puddles) {
    let route=new Array(n).fill().map(()=>new Array(m).fill(0));
    route[0][0]=1;
    for(puddle of puddles){
        route[puddle[1]-1][puddle[0]-1]=-1;
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            //집일때, 현재 위치가 물웅덩이 일때
            if(i==0&&j==0 || route[i][j]==-1)
                continue;
            //왼쪽,위에 다 물웅덩이나 벽으로 막혔을때 물웅덩이로 
            else if(i==0&&route[i][j-1]==-1||j==0&&route[i-1][j]==-1)
                route[i][j]=-1;
            //왼쪽이 벽이거나 물웅덩이일때 위칸 그대로
            else if(j==0 ||route[i][j-1]==-1)
                route[i][j]=route[i-1][j];
            //위쪽이 벽이거나 물웅덩이일때 왼쪽칸 그대로
            else if(i==0||route[i-1][j]==-1)
                route[i][j]=route[i][j-1];
            //왼쪽,위쪽 칸 더하기
            else
                route[i][j]=(route[i-1][j]+route[i][j-1])%1000000007
        }
    }

    return route[n-1][m-1]==-1?0:route[n-1][m-1];
}