function solution(dartResult) {
    dartResult=dartResult.split("")
    let l=dartResult.length
    let i=0
    let dic={'S':'**1+','D':'**2+','T':'**3+','#':'*(-1)+'}
    while(i<=l){
        if(dartResult[i] in dic){
            dartResult[i]=dic[dartResult[i]]
        }
        else if(dartResult[i]==='*'){
            dartResult[i]="*2+"
            if(i!=2){
                dartResult.splice(i-2,0,"*2+")
            l+=1
            }
        }
        i+=1
    }
    let result=dartResult.join("").replaceAll("+*","*")
    return eval(result.slice(0,result.length-1))
}