def solution(n):
    result=[True]*(n+1)
    result[0]=False
    result[1]=False
    total=[]
    for i in range(2,n+1):
        if result[i]:
            total.append(i)
            for j in range(i*i,n+1,i):
                result[j]=False
    return len(total)
