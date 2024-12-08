num=int(input())
result=[]

for i in range(num):
  if i==0 or i==1:
    result.append(1)
  else:
    result.append(result[i-1]+result[i-2])
print(result[-1])
