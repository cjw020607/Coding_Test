function solution(targets) {
    targets.sort((a,b)=>a[1]-b[1]);
    let count=0;
    let last=0;
    for(let i=0;i<targets.length;i++){
        let [s,e]=targets[i];
        if(last<=s){
            count++;
            last=e;
        }

    }
    return count;
}