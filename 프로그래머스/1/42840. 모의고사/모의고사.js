function solution(answers) {
    let first=[1,2,3,4,5]
    let second=[2,1,2,3,2,4,2,5]
    let third=[3,3,1,1,2,2,4,4,5,5]
    
    let result=answers.reduce((acc,value,idx)=>{
        if(value===first[idx%5])
            acc[0]+=1
        if(value===second[idx%8])
            acc[1]+=1
        if(value===third[idx%10])
            acc[2]+=1
        return acc
    },[0,0,0])
    let m=Math.max(...result)
    return result.reduce((acc,value,idx)=>{
        if(value===m)
            acc.push(idx+1)
        return acc
    },[])
}