function solution(progresses, speeds) {
    progresses=progresses.map((item,index)=>Math.ceil((100-item)/speeds[index]))
    let result=[]
    while(progresses.length!==0){
        let i=1
        let count=1
        while(progresses[0]>=progresses[i]){
            count+=1
            i+=1
        }
        result.push(count)
        progresses.splice(0,count)
    }
    return result;
}
