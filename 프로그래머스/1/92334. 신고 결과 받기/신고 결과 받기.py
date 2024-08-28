def solution(id_list, report, k):
    dic=dict()
    result=[]
    users=[]
    report=list(set(report))
    for item in id_list:
        dic[item]=[]
    for item in report:
        item=item.split(" ")
        dic[item[1]].append(item[0])
    for key, value in dic.items():
        if len(value)>=k:
            users.extend(value)
    for item in id_list:
        result.append(users.count(item))
        
    return result
    