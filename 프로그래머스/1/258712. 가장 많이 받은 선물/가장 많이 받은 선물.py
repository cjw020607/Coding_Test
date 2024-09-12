def solution(friends, gifts):
    l=len(friends)
    graph=[[0] *l for _ in range(l)]
    jisu=[[0]*2 for _ in range(l)]
    for gift in gifts:
        gift=gift.split()
        graph[friends.index(gift[0])][friends.index(gift[1])]+=1

    for i in range(l):
        for j in range(l):
            jisu[i][0]+=graph[i][j] #준 선물
            jisu[j][1]+=graph[i][j] #받은 선물
    result=[0]*l
    for i in range(l):
        for j in range(l):
            if i==j:
                continue
            if graph[i][j]>graph[j][i]:
                result[i]+=1
            elif graph[i][j]==graph[j][i] or (graph[i][j]==0 and graph[j][i]==0):
                #지수가 더 클때만 선물 하나 추가
                if jisu[i][0]-jisu[i][1]>jisu[j][0]-jisu[j][1]:
                    result[i]+=1
    return max(result)