function solution(numbers) {
    return 45-numbers.reduce((acc,item)=>acc+item,0)
}