def solution(s):
    input_list=list(s[2:-2].split("},{"))
    input_list=sorted(input_list,key=lambda x:len(x))
    result=[]
    for i in range(len(input_list)):
        item=set(list(map(int,input_list[i].split(","))))
        if i==0:
            result.append(list(item)[0])
            tmp=item
            continue
        result.append(list(item-tmp)[0])
        tmp=item
    return result 
  