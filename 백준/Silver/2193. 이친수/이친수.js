const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let num = BigInt(input); // 입력을 BigInt로 변환
let list = [1n, 1n]; // BigInt를 사용한 배열 초기화

for (let i = 2n; i < num; i++) { // 반복문에서도 BigInt 사용
  list.push(list[i - 1n] + list[i - 2n]); // BigInt 연산
}

console.log(list[num - 1n].toString()); // 결과 출력 시 문자열로 변환
