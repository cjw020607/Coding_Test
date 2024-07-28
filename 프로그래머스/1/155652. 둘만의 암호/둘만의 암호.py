def solution(s, skip, index):
    alp = 'abcdefghijklmnopqrstuvwxyz'
    result=""
    l=len(alp)
    for char in s:
        idx=alp.index(char)+1
        count=0
        while count!=index:
            # if idx>l:
                # break
            if alp[idx%l] not in skip:
                count+=1
            idx+=1
        result+=alp[idx%l-1]
    return result