function solution(s, skip, index) {
    let alp="abcdefghijklmnopqrstuvwxyz";
    let result="";
    let skl=skip.length;
    let sl=s.length;
    for(let i=0;i<skl;i++){
        alp=alp.replace(skip[i],"")
    }
    let al=alp.length;
    for(let i=0;i<sl;i++){
        result+=alp[(alp.indexOf(s[i])+index)%al];
    }
    return result;
}