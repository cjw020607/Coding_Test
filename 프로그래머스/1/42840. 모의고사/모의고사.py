def solution(answers):
    l=len(answers)
    first=[1,2,3,4,5]*(l//5+1)
    second=[2,1,2,3,2,4,2,5]*(l//8+1)
    third=[3,3,1,1,2,2,4,4,5,5]*(l//10+1)
    sum=[0,0,0]
    for i in range(l):
        if first[i]==answers[i]:
            sum[0]+=1
        if second[i]==answers[i]:
            sum[1]+=1
        if third[i]==answers[i]:
            sum[2]+=1
    m=max(sum)
    result=[]
    for index, value in enumerate(sum):
        if value==m:
            result.append(index+1)
    return result