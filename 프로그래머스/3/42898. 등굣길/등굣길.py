def solution(m, n, puddles):
    #무조건 왼쪽 아니면 아래
    route=[[0 for _ in range(m)] for _ in range(n)]
    route[0][0]=1
    for puddle in puddles:
        route[puddle[1]-1][puddle[0]-1]=-1
        
    for i in range(n):
        for j in range(m):
            #집
            if i==0 and j==0:
                continue
            # 위쪽,왼쪽이 모두 벽이나 물웅덩이로 막혔을때 / 현재 위치가 물웅덩이일때 물웅덩이로
            elif i==0 and route[i][j-1]==-1 or j==0 and route[i-1][j]==-1 or route[i][j-1]==-1 and route[i-1][j]==-1 or route[i][j]==-1:
                route[i][j]=-1
            #왼쪽이 물웅덩이거나 벽일때 위칸+1
            elif j==0 or route[i][j-1]==-1:
                route[i][j]=route[i-1][j]
                
            #위쪽이 물웅덩이거나 벽일때 왼쪽칸+1
            elif i==0 or route[i-1][j]==-1:
                route[i][j]=route[i][j-1]
        
            #바로 위칸과 바로 왼쪽칸의 최솟값 +1
            else:
                route[i][j]=(route[i-1][j]+route[i][j-1])%1000000007
    if route[n-1][m-1]==-1:
        return 0
    return route[n-1][m-1]

