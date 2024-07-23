def solution(cards1, cards2, goal):
    for item in goal:
        if len(cards1)!=0 and cards1[0]==item:
            cards1.remove(item)
        elif len(cards2)!=0 and cards2[0]==item:
            cards2.remove(item)
        else:
            return "No"
    return "Yes"