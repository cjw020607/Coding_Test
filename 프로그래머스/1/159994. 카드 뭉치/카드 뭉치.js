function solution(cards1, cards2, goal) {
    let result="Yes";
    goal.forEach(item=>{
        if(cards1.length!=0 && item==cards1[0]){
            cards1.splice(0,1);
            console.log(cards1);
        }
        else if(cards2.length!=0 && item==cards2[0])
            cards2.splice(0,1);
        else
            result="No";
    })
    return result;
}