function solution(arr, delete_list) {
    let result=[];
    arr.map(item=>{
        if(!delete_list.includes(item))
            result.push(item)
    })
    return result;
}