def solution(arr, divisor):
    result= []
    for item in arr:
        if item%divisor==0:
            result.append(item)
    if len(result)==0:
        return [-1]
    return sorted(result)