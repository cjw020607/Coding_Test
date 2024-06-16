function solution(id_pw, db) {
    if(db.some(item=>item[0]===id_pw[0]&&item[1]===id_pw[1]))
        return "login";
    else if(db.some(item=>item[0]===id_pw[0]))
        return "wrong pw";
    else
        return "fail"
}