def solution(arr):
    for _ in range(len(arr)-1):
        new=lcm(arr[0],arr[1])
        arr.pop(0)
        arr.pop(0)
        arr.insert(0,new)
    return arr[0]

def gcd(a,b):
    while b>0:
        a,b=b,a%b
    return a

def lcm(a,b):
    return a*b/gcd(a,b)