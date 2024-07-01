def solution(arr):
    arr.remove(sorted(arr)[0])
    return arr or [-1]