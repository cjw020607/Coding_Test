function solution(rank, attendance) {
    let result=[];
    for(let i=0;i<attendance.length;i++){
        if(attendance[i]==true)
            result.push(rank[i])
    }
    console.log(result)
    result=result.sort((a,b)=>a-b)
    return 10000*rank.indexOf(result[0])+100*rank.indexOf(result[1])+rank.indexOf(result[2]);
}

