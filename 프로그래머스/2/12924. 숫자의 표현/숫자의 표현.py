def solution(n):
    if n%2!=0: #n이 홀수일때
        if n==1:
            result=1 #n이 1이면 약수는 1만
        else:
            result=2 #약수가 1,2일때
        #약수찾기
        for i in range(3,int(n**0.5)+1):
            if n%i==0:
                #약수가 n의 제곱근일때
                if i==n/i:
                    result+=1
                else:
                    result+=2
    else: #n이 짝수일때
        result=1 #약수가 1일때
        for i in range(3,n,2):
            if n%i==0:
                result+=1
    return result

