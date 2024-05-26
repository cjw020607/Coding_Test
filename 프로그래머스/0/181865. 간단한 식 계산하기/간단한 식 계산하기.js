function solution(binomial) {
    b=binomial.split(" ");
    if(b[1]==="+")
        return +b[0]+(+b[2]);
    else if(b[1]==="-")
        return b[0]-b[2];
    else if(b[1]==="*")
        return b[0]*b[2];
}