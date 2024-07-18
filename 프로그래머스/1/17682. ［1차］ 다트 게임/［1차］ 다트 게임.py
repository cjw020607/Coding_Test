def solution(dartResult):
    dartResult=list(dartResult)
    l=len(dartResult)
    i=0
    while i<l:
        if dartResult[i]=="S":
            dartResult[i]="**1+"
        elif dartResult[i]=="D":
            dartResult[i]="**2+"
        elif dartResult[i]=="T":
            dartResult[i]="**3+"
        elif dartResult[i]=="*":
            dartResult[i]="*2+"
            if i!=2:
                dartResult.insert(i-2,"*2+")
                l+=1
        elif dartResult[i]=="#":
            dartResult[i]="*(-1)+"
        i+=1
    return eval("".join(dartResult).replace("+*","*")[:-1])