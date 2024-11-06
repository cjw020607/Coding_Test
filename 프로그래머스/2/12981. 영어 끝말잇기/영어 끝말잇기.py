import math

def solution(n, words):
    l=len(words)
    exist=[words[0]]
    index=-1
    for i in range(1,l):
        if words[i-1][-1]!=words[i][0] or words[i] in exist:
            index=i
            break
        else:
            exist.append(words[i])


    if index==-1:
        return [0,0]
    return [index%n+1,index//n+1]