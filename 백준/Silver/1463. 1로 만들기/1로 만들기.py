n=int(input())
arr=[n]
count=0
finish=False
while True:
  tmp=[]
  for i in range(len(arr)):
    # print(arr[0]%3)
    if min(arr)==1:
      finish=True
      break
    if arr[i]%2==0:
      tmp.append(arr[i]//2)
    if arr[i]%3==0:
      tmp.append(arr[i]//3)
      # print(arr[i],arr[i]%3,arr[i]//3,tmp)
    tmp.append(arr[i]-1)
  if finish:
    break
  count+=1
  arr=list(set(tmp))

print(count)