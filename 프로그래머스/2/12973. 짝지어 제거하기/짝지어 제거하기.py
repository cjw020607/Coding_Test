def solution(s):
    s=list(s)
    stack=[s[0]]
    i=1
    while i!=len(s):
        if stack==[]:
            stack.append(s[i])
        elif s[i]==stack[-1]:
            stack.pop()
        else:
            stack.append(s[i])
        i+=1
    if stack==[]:
        return 1
    return 0
