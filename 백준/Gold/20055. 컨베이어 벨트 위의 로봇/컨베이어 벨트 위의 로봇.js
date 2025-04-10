const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const input_arr = input[1].split(' ').map(Number);
const robot_state = new Array(2 * N).fill(false);

let up = 0;
let down = N - 1;
let count = 0;
let zero_count = 0;

while (true) {
    count++;

    // 1. 벨트 회전
    up = (up - 1 + 2 * N) % (2 * N);
    down = (down - 1 + 2 * N) % (2 * N);
    robot_state[down] = false; // 내리는 위치 로봇 제거

    // 2. 로봇 이동
    for (let i = N - 2; i >= 0; i--) {
        let cur = (up + i) % (2 * N);
        let next = (cur + 1) % (2 * N);

        if (robot_state[cur] && !robot_state[next] && input_arr[next] > 0) {
            robot_state[cur] = false;
            robot_state[next] = true;
            input_arr[next]--;
            if (input_arr[next] === 0) zero_count++;
        }
    }

    robot_state[down] = false;

    // 3. 로봇 올리기
    if (input_arr[up] > 0 && !robot_state[up]) {
        robot_state[up] = true;
        input_arr[up]--;
        if (input_arr[up] === 0) zero_count++;
    }

    // 4. 종료 조건
    if (zero_count >= K) break;
}

console.log(count);
