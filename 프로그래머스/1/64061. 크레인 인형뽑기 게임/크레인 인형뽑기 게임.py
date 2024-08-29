def solution(board, moves):
    l=len(board)
    result_board=[]
    result=0
    cboard=[[0 for _ in range(l)] for _ in range(l)]
    for i in range(l):
        for j in range(l):
            cboard[i][j]=board[l-j-1][i]
    cboard=[[item for item in l if item!=0] for l in cboard]
    for item in moves:
        a=cboard[item-1]
        if a!=[]:
            if result_board!=[] and result_board[-1]==a[-1]:
                result_board.pop()
                result+=2
            else:
                result_board.append(a[-1])
            cboard[item-1].pop()
    return result