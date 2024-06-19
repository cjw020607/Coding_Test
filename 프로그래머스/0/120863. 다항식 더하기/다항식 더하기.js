function solution(polynomial) {
    let sumx=0
    let sum=0;
    polynomial=polynomial.split(' + ')
    for(item of polynomial){
        if(item.includes("x")){
            if(item.length===1){
                sumx+=1;
            }
            else
                sumx+=Number(item.slice(0,item.length-1))
        }
        else{
            sum+=Number(item);
        }

    }
    if(sumx===1){
        if(sum===0)
            return "x";
        else
            return "x"+" + "+String(sum)
    }
    else if(sumx===0){
        if(sum===0)
            return;
        else
            return String(sum)
    }
    else{
        if(sum===0)
            return String(sumx)+"x";
        else
            return String(sumx)+"x + "+String(sum)
    }
}