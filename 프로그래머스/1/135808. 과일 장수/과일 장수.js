function solution(k, m, score) {
    score.sort((a,b)=>a-b);
    score.splice(0,score.length%m);
    let l=score.length;
    let result=0;
    for(let i=0;i+3<=l;i+=m){
        result+=Math.min(...score.slice(i,i+m))*m;
    }
    return result;
}