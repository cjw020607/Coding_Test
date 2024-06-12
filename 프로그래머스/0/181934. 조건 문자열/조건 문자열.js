function solution(ineq, eq, n, m) {
    eq=eq.replace("!","")
    return +eval(String(n)+ineq+eq+String(m))
}