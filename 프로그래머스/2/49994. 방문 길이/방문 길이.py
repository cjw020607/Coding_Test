def solution(dirs):
    path={((0,0),(0,0)):1}
    current=(0,0)
    tmp=(0,0)
    for i in range(len(dirs)):
        # if tmp[0]==5 or tmp[1]==5 or tmp[0]==-5 or tmp[1]==-5:
        #     continue;
        if dirs[i]=="U":
            tmp=(current[0],current[1]+1)
        elif dirs[i]=="D":
            tmp=(current[0],current[1]-1)
        elif dirs[i]=="R":
            tmp=(current[0]+1,current[1])
        elif dirs[i]=="L":
            tmp=(current[0]-1,current[1])
        print(tmp)
        if tmp[0]==6 or tmp[1]==6 or tmp[0]==-6 or tmp[1]==-6:
            continue;
        if (current,tmp) in path:
            path[(current, tmp)]+=1
        elif(tmp, current) in path:
            path[(tmp,current)]+=1
        else:
            path[(current,tmp)]=1
        current=tmp
    return len(path)-1