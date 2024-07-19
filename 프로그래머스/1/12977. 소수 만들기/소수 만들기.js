function solution(nums) {
    let l=nums.length
    let result=[]
    for(let i=0;i<l-2;i++){
        for(let j=i+1;j<l-1;j++){
            for(let k=j+1;k<l;k++){
                result.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    let final=result.filter(item=>{
        let prime=true
        for(let i=2;i<item;i++){
            if(item%i===0)
                prime=false
        }
        if(prime===true)
            return item
    })
    
    return final.length;
}