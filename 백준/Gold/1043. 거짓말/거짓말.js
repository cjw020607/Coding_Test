fs = require("fs");
input = fs.readFileSync(0).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let truthArr = input[1].split(" ").map(Number);
let truthNum = truthArr[0]; // 진실을 아는 사람 수
let truthPeople = truthArr.slice(1); // 진실을 아는 사람 목록

let partyArr = [];
for (let i = 2; i < 2 + M; i++) {
    partyArr.push(input[i].split(" ").map(Number));
}

let parent = new Array(N + 1).fill(0).map((_, i) => i);

const find = (a) => {
    if (a === parent[a]) return a;
    return (parent[a] = find(parent[a])); // 경로 압축 최적화
};

const union = (a, b) => {
    a = find(a);
    b = find(b);
    if (a !== b) parent[b] = a;
};

// 1. 진실을 아는 사람들끼리 union
if (truthNum > 0) {
    let first = truthPeople[0];
    for (let i = 1; i < truthPeople.length; i++) {
        union(first, truthPeople[i]);
    }
}

// 2. 파티에 참여한 사람끼리 union
for (let i = 0; i < M; i++) {
    let [peopleNum, ...people] = partyArr[i];
    for (let j = 1; j < people.length; j++) {
        union(people[0], people[j]);
    }
}

// 3. 진실을 아는 그룹 찾기
let truthRoot = new Set(truthPeople.map(find)); // 모든 진실 아는 사람들의 대표 루트 저장

// 4. 각 파티에서 진실을 아는 사람이 포함되었는지 확인
let result = 0;
for (let i = 0; i < M; i++) {
    let [peopleNum, ...people] = partyArr[i];
    let canLie = true;
    for (let j = 0; j < people.length; j++) {
        if (truthRoot.has(find(people[j]))) { // 진실 아는 그룹이면 거짓말 불가능
            canLie = false;
            break;
        }
    }
    if (canLie) result++;
}

console.log(result);
