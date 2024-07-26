from itertools import combinations
def solution(d, budget):
    d.sort()
    i=len(d)
    while sum(d[:i])>budget:
        i-=1
    return i