function solution(score) {
    score=score.map(s=>s[0]+s[1]);
    sorted_score=[...score].sort((a,b)=>b-a)
    let rank=[]
    for(let i=0;i<sorted_score.length;i++){
        if(i===0)
            rank.push(1)
        else if(sorted_score[i]===sorted_score[i-1])
            rank.push(rank[i-1])
        else
            rank.push(i+1)
    }

    return score.map(item=>{
        return rank[sorted_score.indexOf(item)]
    })

}