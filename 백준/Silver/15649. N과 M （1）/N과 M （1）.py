N,M=map(int,input().split())
from itertools import permutations #순열
input_list=[i for i in range(1,N+1)]

result=list(permutations(input_list,M))
for pair in result:
    print(' '.join(map(str,pair)))