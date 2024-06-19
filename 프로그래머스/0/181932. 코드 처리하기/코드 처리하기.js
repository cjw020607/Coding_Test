function solution(code) {
    code=code.split("1").join("")
    return code.split("").filter((n,idx)=>idx%2==0).join("")||"EMPTY"
}