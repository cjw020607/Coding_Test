function solution(arr) {
    let result=[]
    arr.map(item=>{
           for(let i=0;i<item;i++)
               result.push(item)
    })
    return result;
}