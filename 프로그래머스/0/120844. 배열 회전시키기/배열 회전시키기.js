function solution(numbers, direction) {
    let len=numbers.length
    if(direction==="right")
        return [numbers[len-1]].concat(numbers.slice(0,len-1));
    else
        return numbers.slice(1).concat([numbers[0]]);
}