def solution(n):
    count=1
    while n>1:
        if n%2==0:
            n/=2
        else:
            count+=1
            n-=1
    return count
