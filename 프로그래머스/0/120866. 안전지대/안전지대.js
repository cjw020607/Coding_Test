function solution(board) {
    let width=board[0].length;
    let height=board.length;
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(board[i][j]===1){
            if(j!=0&&board[i][j-1]===0)
                board[i][j-1]=2
            if(j!=width&&board[i][j+1]===0)
                board[i][j+1]=2
            if(i!=0){
                if(board[i-1][j]==0)
                    board[i-1][j]=2
                if(j!=0&&board[i-1][j-1]==0)
                    board[i-1][j-1]=2
                if(j!=width&&board[i-1][j+1]==0)
                    board[i-1][j+1]=2
            }
            if(i!=height-1){
                if(board[i+1][j]===0)
                    board[i+1][j]=2
                if(j!=0&&board[i+1][j-1]==0)
                    board[i+1][j-1]=2
                if(j!=width&&board[i+1][j+1]==0)
                    board[i+1][j+1]=2
            }
        }
        }
    }
    let count=0;
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(board[i][j]===0)
                count+=1
        }
    }
    console.log(board)
    return count;
}