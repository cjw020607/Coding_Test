function solution(s) {
    let result="";
    for(char of s){
        if(s.indexOf(char)===s.lastIndexOf(char))
            result+=char
    }
    return [...result].sort().join("");
}