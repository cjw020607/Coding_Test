function solution(myString) {
    return [...myString].map(item=>item.toLowerCase()!='a'?item.toLowerCase():'A').join("");

}