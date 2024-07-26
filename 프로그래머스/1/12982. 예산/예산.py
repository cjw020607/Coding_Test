from itertools import combinations
def solution(d, budget):
    d.sort()
    l=len(d)
    print(d)
    i=l
    while sum(d[:i])>budget:
        i-=1
    return i