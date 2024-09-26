num=int(input())
for i in range(num):
  n=int(input())
  array=[[1,0],[0,1]]
  for j in range(n-1):
    array.append([array[j][0]+array[j+1][0],array[j][1]+array[j+1][1]])
  print(array[n][0],array[n][1])