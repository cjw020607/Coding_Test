function solution(picture, k) {
    return picture.reduce((acc,s)=>{
        l=s.split("").reduce((acc,c)=>acc+c.repeat(k),"");
        for(let i=0;i<k;i++)
            acc.push(l);
        return acc;
    },[])

}

// 발표대본
// 발표영상찌기
// 유엠씨
// 포트폴리오
