def solution(triangle):
    #bottom->up
    h=len(triangle)
    for i in range(h-1,0,-1):
        for j in range(0,i):
            triangle[i-1][j]+=max(triangle[i][j],triangle[i][j+1])
    answer = 0
    return triangle[0][0]