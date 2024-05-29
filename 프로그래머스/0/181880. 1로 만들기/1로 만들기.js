function solution(num_list) {
    let count = 0;
    for(item of num_list){
        while(item!=1){
            if(item%2)
                item=(item-1)/2;
            else
                item=item/2;
            count+=1;
        }
    }
    return count;
}