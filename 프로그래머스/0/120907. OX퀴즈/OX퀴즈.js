function solution(quiz) {
    return quiz.map(cal=>{
        cal=cal.split(" ")
        if(cal[1]==='+'){
            if(+cal[0]+(+cal[2])===+(cal[4]))
                return "O";
            else
                return "X";
        }
        else{
            if(+cal[0]-(+cal[2])===+(cal[4]))
                return "O";
            else
                return "X";
        }
        // if(eval(q)===a)
        //     return "O";
        // else
        //     return "X";
    });
}