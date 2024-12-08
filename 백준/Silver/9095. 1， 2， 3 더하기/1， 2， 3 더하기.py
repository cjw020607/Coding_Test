
num=int(input())
input_list=[]
for i in range(num):
  n=int(input())
  input_list.append(n)
result=[]
for i in range(num):
  tmp_list=[1,2,4]
  n=input_list[i]
  if n==1 or n==2 or n==3:
    result.append(tmp_list[n-1])
    continue;
  for j in range(3,n):
    tmp_list.append(tmp_list[j-1]+tmp_list[j-2]+tmp_list[j-3])
  result.append(tmp_list[-1])
for i in range(num):
  print(result[i])