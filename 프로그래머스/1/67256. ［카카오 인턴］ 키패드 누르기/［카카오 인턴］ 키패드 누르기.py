def solution(numbers, hand):
    dic={1:[0,0],2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[2,0],8:[2,1],9:[2,2],"*":[3,0],0:[3,1], "#":[3,2]}
    result=""
    left=[1,4,7]
    right=[3,6,9]
    left_hand=dic["*"]
    right_hand=dic["#"]
    for item in numbers:
        if item in left:
            result+="L"
            left_hand=dic[item]
        elif item in right:
            result+="R"
            right_hand=dic[item]
        else:
            l=abs(left_hand[0]-dic[item][0])+abs(left_hand[1]-dic[item][1])
            r=abs(right_hand[0]-dic[item][0])+abs(right_hand[1]-dic[item][1])
            if l==r:
                if hand=="right":
                    result+='R'
                    right_hand=dic[item]
                else:
                    result+='L'
                    left_hand=dic[item]
            elif l<r:
                result+="L"
                left_hand=dic[item]
            else:
                result+="R"
                right_hand=dic[item]

            
    return result