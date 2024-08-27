def solution(s, n):
    calp="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lalp=calp.lower()
    result=""
    for item in s:
        if item in calp:
            result+=calp[(calp.index(item)+n)%26]
        elif item in lalp:
            result+=lalp[(lalp.index(item)+n)%26]
        else:
            result+=item
    return result