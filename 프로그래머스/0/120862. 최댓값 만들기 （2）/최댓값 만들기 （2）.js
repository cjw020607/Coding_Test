function solution(numbers) {
    numbers.sort((a,b)=>a-b);
    return Math.max(numbers[numbers.length-2]*numbers[numbers.length -1],numbers[1]*numbers[0])
}