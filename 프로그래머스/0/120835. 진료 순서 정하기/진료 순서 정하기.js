function solution(emergency) {
    let em=[...emergency]
    emergency.sort((a,b)=>b-a);
    // return sortE
    return em.map(item=>emergency.indexOf(item)+1);
}