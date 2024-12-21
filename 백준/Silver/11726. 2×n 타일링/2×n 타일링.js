const fs = require("fs");
let n = BigInt(fs.readFileSync(0).toString().trim()); // 입력을 BigInt로 변환
let end = n / 2n; // BigInt 연산

const fact = (num) => {
    let total = BigInt(1);
    for (let i = 1n; i <= num; i++) {
        total *= i; // BigInt 곱셈
    }
    return total;
};

let result = 0n; // 결과값도 BigInt로 초기화
for (let i = 0n; i <= end; i++) {
    // 팩토리얼 계산 및 조합식 연산
    result += (fact(n - i) / (fact(n - i * 2n) * fact(i))) % 10007n;
}
console.log(Number(result % 10007n)); // 결과를 Number로 변환하여 출력
