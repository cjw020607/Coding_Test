def solution(a, b, n):
    result=0
    while n//a>0:    
        left=n%a
        num=(n//a)*b
        result+=num
        n=num+left
    return result