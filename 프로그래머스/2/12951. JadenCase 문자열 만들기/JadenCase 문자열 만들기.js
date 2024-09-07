function solution(s) {
    let first=true;
    let result="";
    [...s].forEach(c=>{
        if(c===" "){
            result+=c;
            first=true;
        }
        else if(first===true){
            result+=c.toUpperCase();
            first=false;
        }
        else{
            result+=c.toLowerCase();
        }
})
    return result;
}