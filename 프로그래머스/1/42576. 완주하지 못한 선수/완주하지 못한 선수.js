// function solution(participant, completion) {
//     participant.splice(1,2)
//     return participant
//     for (let i = 0; i < completion.length; i++) {
//         if (participant.includes(completion[i])) {
//             let index = participant.indexOf(completion[i]);
//             participant.splice(index, 1);
//         }
//     }
//     return participant[0];
// }
function solution(participant, completion) {
    const map = new Map();

    // participant 배열의 각 요소를 Map에 추가
    participant.forEach(name => {
        map.set(name, (map.get(name) || 0) + 1);
    });

    // completion 배열의 각 요소를 Map에서 제거
    completion.forEach(name => {
        if (map.has(name)) {
            const count = map.get(name);
            if (count === 1) {
                map.delete(name);
            } else {
                map.set(name, count - 1);
            }
        }
    });

    // Map에 남아있는 유일한 요소 반환
    return map.keys().next().value;
}
