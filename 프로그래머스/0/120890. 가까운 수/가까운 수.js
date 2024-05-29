function solution(array, n) {
    array=array.sort((a,b)=>a-b);
    let minus=array.map(item=>Math.abs(item-n));
    let m=Math.min(...minus);
    return array[minus.indexOf(m)];
}