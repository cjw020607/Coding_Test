def solution(n):
    result=''
    final=0
    while(n>=1):
        result+=str(n%3)
        n=n//3
    l=len(result)
    for i in range(l):
        final+=int(result[l-1-i])*3**i
        
    return final