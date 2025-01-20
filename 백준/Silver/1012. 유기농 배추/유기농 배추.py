from re import X
from collections import deque
n=int(input())
for i in range(n):
  w,h,k=map(int,input().split())
  arr=[[0]*w for _ in range(h)]
  visited=[[0]*w for _ in range(h)]
  queue=deque()
  cabbage=[]
  for j in range(k):
    x,y=map(int,input().split())
    cabbage.append([y,x])
    arr[y][x]=1
  count=0
  for [y,x] in cabbage:
    if visited[y][x]==0:
      queue.append([y,x])
      visited[y][x]=1
      while len(queue)>0:
        y,x=queue.popleft()
        directions=[[0,1],[0,-1],[1,0],[-1,0]]
        for [dy,dx] in directions:
          nx=dx+x
          ny=dy+y
          if nx<0 or nx>=w or ny<0 or ny>=h:
            continue
          if arr[ny][nx]==1 and visited[ny][nx]==0:
            visited[ny][nx]=1
            queue.append([ny,nx])
      count+=1
  print(count)