from collections import Counter

def solution(N, stages):
    total = len(stages)
    
    # N+1을 모두 제거
    stages = [stage for stage in stages if stage <= N]
    
    # Counter를 사용하여 각 스테이지에 머물러 있는 사용자 수를 계산
    dic = dict(Counter(stages))
    
    # 각 스테이지에 실패율을 저장할 딕셔너리
    failure_rate = {}
    
    for i in range(1, N + 1):
        if i in dic:
            count = dic[i]
            if total > 0:
                failure_rate[i] = count / total
                total -= count
            else:
                failure_rate[i] = 0
        else:
            failure_rate[i] = 0
    
    # 실패율을 기준으로 내림차순 정렬하고, 실패율이 동일한 경우 스테이지 번호 순으로 정렬
    sorted_stages = sorted(failure_rate.items(), key=lambda x: (-x[1], x[0]))
    
    # 정렬된 스테이지 번호만 반환
    return [stage[0] for stage in sorted_stages]

# 예제 사용
N = 5
stages = [2, 1, 2, 6, 2, 4, 3, 3]
print(solution(N, stages))  # 예제 출력: [3, 4, 2, 1, 5]
