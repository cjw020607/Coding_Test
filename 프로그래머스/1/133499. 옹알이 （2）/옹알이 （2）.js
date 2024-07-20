function solution(babbling) {
    let word=["aya","ye","woo","ma"];
    let result=0
    for(let i=0;i<babbling.length;i++){
        for(let j=0;j<4;j++){
            if(!babbling[i].includes(word[j].repeat(2)))
                babbling[i]=babbling[i].replaceAll(word[j]," ")
        }
        if(babbling[i].trim().length==0)
            result+=1
    }
    return result;
}