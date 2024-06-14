function solution(spell, dic) {
    for(d of dic){
        let count=0
        for(s of spell){
            if(!d.includes(s))
                break;
            count+=1
        }
        if(count===spell.length)
            return 1
    }
    return 2
}