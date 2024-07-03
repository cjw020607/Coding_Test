def solution(left, right):
    result=0
    for item in range(left,right+1):
        total=0
        for k in range(1,item+1):
            if item%k==0:
                total+=1
        if total%2==0:
            result+=item
        else:
            result-=item
    return result