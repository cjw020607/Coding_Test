def solution(s):
    s=list(s)
    stack=[]
    count=0
    opened=["[","(","{"]
    closed=["]",")","}"]

    for i in range(len(s)):
        for j in range(len(s)):
            clear=True
            if s[j] in opened:
                stack.append(s[j])
            elif len(stack)!=0 and opened.index(stack[-1])==closed.index(s[j]):
                stack.pop()
            else:
                clear=False
                break
        if clear==True and len(stack)==0:
            count+=1
        s.append(s[0])
        s.pop(0)
    return count