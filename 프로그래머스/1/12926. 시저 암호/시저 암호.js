function solution(s, n) {
    let result=""
    for(item of s){
        if(item==" ")
            result+=item;
        else if(item==item.toUpperCase()){
            result+= String.fromCharCode((item.charCodeAt(0)-'A'.charCodeAt(0)+n)%26+'A'.charCodeAt(0));
        }
        else if(item==item.toLowerCase()){
            result+= String.fromCharCode((item.charCodeAt(0)-'a'.charCodeAt(0)+n)%26+'a'.charCodeAt(0));
        }
    }
    return result;
}