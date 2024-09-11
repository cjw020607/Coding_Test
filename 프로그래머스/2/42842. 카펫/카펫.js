function solution(brown, yellow) {
    let xy=yellow+brown;
    let y=0;
    for(let x=2;x<~~Math.sqrt(xy)+1;x++){
        if(xy%x===0){
            y=xy/x;
            if(x+y===brown/2+2)
                return [Math.max(x,y),Math.min(x,y)];
        }
    }
}