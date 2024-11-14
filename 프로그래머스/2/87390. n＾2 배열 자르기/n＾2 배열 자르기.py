def solution(n, left, right):
    result=[]
    step=(left)//n+1
    end=(right)//n+1
    remain=(left)%n
    for i in range(step,end+1):
        result.extend([i]*i)
        for j in range(i+1,n+1):
            result.append(j)

        if len(result)-remain>=right:
            break
    return result[remain:remain+right-left+1]

