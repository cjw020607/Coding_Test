def solution(brown, yellow):
    xy=brown+yellow
    y=0
    for x in range(2,int(xy**0.5)+1):
        if xy%x==0:
            y=xy/x
        if x+y==brown/2+2:
            return [max(x,y),min(x,y)]
