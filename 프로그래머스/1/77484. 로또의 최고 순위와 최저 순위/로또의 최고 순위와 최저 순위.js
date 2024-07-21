function solution(lottos, win_nums) {
    let score=[6,6,5,4,3,2,1];
    let correct=lottos.filter(item=>win_nums.includes(item)).length
    let z=lottos.filter(item=>item===0).length
    return [score[correct+z],score[correct]];
}