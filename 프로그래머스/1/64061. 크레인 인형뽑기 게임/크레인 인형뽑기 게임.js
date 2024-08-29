function solution(board, moves) {
    let l=board.length;
    cboard=Array.from({ length: l }, () => Array(l).fill(0));
    for(let i=0;i<l;i++){
        for(let j=0;j<l;j++){
            cboard[i][j]=board[l-j-1][i];
        }
    }
    cboard=cboard.map(l=>l.filter(item=>item!=0));
    stack=[]
    result=0
    for(index of moves){
        row=cboard[index-1];
        if(row.length!=0){
            if(stack!=[] &&stack[stack.length-1]==row[row.length-1]){
                stack.pop();
                result+=2;
            }
            else{
                stack.push(row[row.length-1]);
            }
            cboard[index-1].pop();
        }
    }
    return result;
}