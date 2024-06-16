function solution(keyinput, board) {
    let wid=~~(board[0]/2);
    let len=~~(board[1]/2);
    return keyinput.reduce((acc,key)=>{
        
        if(key==="left"&&-wid<acc[0])
            acc[0]-=1;
        else if(key==="right"&&wid>acc[0])
            acc[0]+=1;
        else if(key==="up"&&len>acc[1])
            acc[1]+=1;
        else if(key==="down"&&-len<acc[1])
            acc[1]-=1;
        return acc;
    },[0,0])

    // let wid=~~(board[0]/2);
    // let len=~~(board[1]/2);
    //  if(b[1] >len)
    //     b[1]=len
    //  else if(b[1]<len*(-1))
    //     b[1]=len*(-1)
    //  if(b[0]>wid)
    //     b[0]=wid
    //  else if(b[0]<wid*(-1))
    //     b[0]=wid*(-1)
    // return b;
}