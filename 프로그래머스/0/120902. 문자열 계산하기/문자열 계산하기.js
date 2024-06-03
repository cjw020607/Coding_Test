function solution(my_string) {
    let cal=my_string.split(" ");
    let sum=Number(cal[0]);
    for(let i=0;i<cal.length;i++){
        if(cal[i]==="+"){
            sum+=Number(cal[i+1]);
        }
        else if(cal[i]==="-"){
            sum-=Number(cal[i+1]);
        }
    }
    return sum;
}