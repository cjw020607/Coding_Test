function solution(num_list) {
    return [num_list.reduce((acc,item)=>item%2==0?acc+1:acc,0),num_list.reduce((acc,item)=>item%2==1?acc+1:acc,0)]
}