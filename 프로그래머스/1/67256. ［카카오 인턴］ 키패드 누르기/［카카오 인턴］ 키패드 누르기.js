function solution(numbers, hand) {
    let dic={1:[0,0],2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[2,0],8:[2,1],9:[2,2],"*":[3,0],0:[3,1], "#":[3,2]};
    let result="";
    let left=[1,4,7];
    let right=[3,6,9];
    let left_hand=dic["*"];
    let right_hand=dic["#"];
    for(item of numbers){
        if(left.includes(item)){
            result+="L"
            left_hand=dic[item];
        }
        else if(right.includes(item)){
            result+="R"
            right_hand=dic[item];
        }
        else{
            let l=Math.abs(left_hand[0]-dic[item][0])+Math.abs(left_hand[1]-dic[item][1]);
            let r=Math.abs(right_hand[0]-dic[item][0])+Math.abs(right_hand[1]-dic[item][1]);
            if(l==r){
                if(hand==="right"){
                    result+="R"
            right_hand=dic[item];
                }
                else{
                    result+="L"
            left_hand=dic[item];
                }
            }
            else if(l>r){
                result+="R"
            right_hand=dic[item];
            }
            else{
                result+="L"
            left_hand=dic[item];
            }
        }
    }
    
    return result;
}