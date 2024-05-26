function solution(num, k) {
    if(String(num).includes(String(k)))
        return String(num).indexOf(String(k))+1;
    return -1;
}