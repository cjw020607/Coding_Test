def solution(cacheSize, cities):
    stack=[]
    result=0

    for i in range(len(cities)):
        if cacheSize==0:
            result+=5
        elif cities[i].lower() in stack:
            stack.remove(cities[i].lower())
            stack.append(cities[i].lower())
            result+=1
        else:
            if len(stack)==cacheSize and len(stack)!=0:
                stack.pop(0)
            stack.append(cities[i].lower())
            result+=5
    return result
