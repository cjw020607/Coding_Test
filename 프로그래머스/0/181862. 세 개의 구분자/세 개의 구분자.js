function solution(myStr) {
    myStr=myStr.replace(/[a-c]/g," ").split(" ")
    myStr=myStr.filter(item=>item!="")
    return !myStr.length?["EMPTY"]:myStr;
}