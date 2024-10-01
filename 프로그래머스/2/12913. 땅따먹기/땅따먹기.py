def solution(land):
    N=len(land)
    for i in range(N-1,0,-1):
        temp_list=land[i]
        for j in range(4):
            temp_list=land[i].copy()
            temp_list.pop(j)
            land[i-1][j]+=max(temp_list)

    return max(land[0])