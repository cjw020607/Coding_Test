function solution(code) {
    let result=''
    code=code.split("1").join("").split("")
    code.forEach((item,idx)=>{
        if(idx%2===0){
            result+=item.split("").filter((c,i)=>i%2==0).join("");
        }
        else{
            result+=item.split("").filter((c,i)=>i%2==1).join("");
        }
    })
    return result.length!==0?result:"EMPTY";
}