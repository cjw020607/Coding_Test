function solution(my_string) {
    return my_string.split('').reduce((sum,item)=>{
        if(!isNaN(item))
            return sum+item;
        else
            return sum+" ";
        return sum;
    },"").split(' ').reduce((sum,item)=>{
        if(item!=" ")
            return sum+=+item;
        return sum;
    },0)
}