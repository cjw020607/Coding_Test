from functools import reduce 
def solution(clothes):
    dic=dict()
    for item in clothes:
        dic[item[1]]=dic.get(item[1],0)+1
    if len(dic)==1:
        return list(dic.values())[0]
    else:
        return reduce(lambda x,y:x*(y+1),dic.values(),1)-1
