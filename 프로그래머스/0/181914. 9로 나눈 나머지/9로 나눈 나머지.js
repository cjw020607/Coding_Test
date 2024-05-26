function solution(number) {
    return number.split("").reduce((sum,item)=>+item+sum,0)%9;

}