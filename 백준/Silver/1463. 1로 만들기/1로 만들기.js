const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split('\n');
let arr=[n]
let count=0
let finish=false
while(true){
    let tmp=[]
    for(let i=0;i<arr.length;i++){
        if(Math.min(...arr)===1){
            finish=true
            break
        }
        if(arr[i]%3===0)
            tmp.push(arr[i]/3)
        if(arr[i]%2===0)
            tmp.push(arr[i]/2)
        tmp.push(arr[i]-1)
    }
    if(finish)
        break
    arr=[...new Set(tmp)]
    count+=1
}
console.log(count)