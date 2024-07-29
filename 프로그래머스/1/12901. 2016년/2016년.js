function solution(a, b) {
    let w=["THU","FRI","SAT","SUN","MON","TUE","WED"]
    let m=[0,31,29,31,30,31,30,31,31,30,31,30,31]
    return w[(m.slice(0,a).reduce((add,item)=>add+item)+b)%7]
}