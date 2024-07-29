def solution(a, b):
    w=["THU","FRI","SAT","SUN","MON","TUE","WED"]
    m=[0,31,29,31,30,31,30,31,31,30,31,30,31]
    return w[(sum(m[:a])+b)%7]