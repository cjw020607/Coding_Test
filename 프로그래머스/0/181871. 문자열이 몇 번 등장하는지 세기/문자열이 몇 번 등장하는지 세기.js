function solution(myString, pat) {
    let result=0;
    while(myString.length){
        if(myString.includes(pat)){
            let idx=myString.indexOf(pat);
            myString=myString.slice(idx+1);
            result+=1;
        }
        else
            break;
    }
    return result;
}