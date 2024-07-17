def solution(sizes):
    for i in range(len(sizes)):
        sizes[i]=sorted(sizes[i])
    width=[sizes[i][0] for i in range(len(sizes))]
    height=[sizes[i][1] for i in range(len(sizes))]
    return max(width)*max(height)