def solution(s):
    flag=0
    for item in s:
        if item=="(":
            flag+=1
        elif item==")":
            flag-=1
            if flag<0:
                return False
    if flag==0:
        return True
    return False
