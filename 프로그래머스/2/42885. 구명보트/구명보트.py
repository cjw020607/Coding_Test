def solution(people, limit):
    people.sort()
    i=0
    j=len(people)-1
    count=0
    while i<j:
        if people[i]+people[j]<=limit:
            j-=1
            i+=1
            count+=1
            continue
        else:
            count+=1
            j-=1
    if i<=j:
        return count+1
    return count