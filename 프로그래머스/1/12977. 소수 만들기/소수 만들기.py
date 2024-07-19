from itertools import combinations
def solution(nums):
    l=list(combinations(nums,3))
    result=[]
    for item in l:
        result.append(sum(item))
    m=max(result)
    k=set(range(2,m+1))
    for i in range(2,m+1):
        if i in k:
            k=k-set(range(i*i,m+1,i))
    count=0
    for item in result:
        if item in k:
            count+=1
    return count
        