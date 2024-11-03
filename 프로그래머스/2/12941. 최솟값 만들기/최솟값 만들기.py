def solution(A,B):
    A.sort()
    B.sort(reverse=True)
    result=[A[i]*B[i] for i in range(len(A))]

    return sum(result)