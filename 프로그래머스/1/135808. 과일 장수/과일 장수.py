def solution(k, m, score):
    score.sort(reverse=True)
    l=len(score)
    result=0
    for i in range(0,l,m):
        if i+m>l:
            break
        result+=min(score[i:i+m])*m
    return result