def solution(babbling):
    x=['11','22','33','44']
    result=0
    for i in range(len(babbling)):
        babbling[i]=babbling[i].replace('aya','1').replace('ye','2').replace('woo','3').replace('ma','4')
        if babbling[i].isdigit():
            for j in range(4):
                flag=False
                if x[j] in babbling[i]:
                    flag=True
                    break
            if flag==False:
                result+=1
    return result