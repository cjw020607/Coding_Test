def solution(s):
    first=True
    result=""
    for item in s:
        if item==" ":
            first=True
            result+=item
            continue
        elif first==True:
            result+=item.upper()
            first=False
        else:
            result+=item.lower()
    return result