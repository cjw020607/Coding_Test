function solution(phone_book) {
    let dic={};
    phone_book.forEach(item=>dic[item]=true);
    let index=1;
    for(let key in dic){
        let l=key.length;
        for(let i=1;i<l;i++){
            let sub=key.substring(0,i);
            if(dic[sub]) return false;
        }
    }
    return true
}