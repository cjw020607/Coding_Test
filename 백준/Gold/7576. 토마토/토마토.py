#BFS
from collections import deque
N,M=map(int,input().split())
arr=[]
visited=[[0]*N for _ in range(M)]

tomato=[]
for i in range(M):
  a=list(map(int,input().split()))
  arr.append(a)
  for index,value in enumerate(a):
    if value==1:
      tomato.append([i,index,0])
      visited[i][index]=1
    elif value==-1:
      visited[i][index]=-1

queue=deque(tomato)
direction=[[0,1],[0,-1],[-1,0],[1,0]]

while len(queue)>0:
  [y,x,dist]=queue.popleft()
  for [dy,dx] in direction:
    ny=dy+y
    nx=dx+x
    if nx>=0 and nx<=N-1 and ny>=0 and ny<=M-1 and visited[ny][nx]==0 and arr[ny][nx]==0:
      queue.append([ny,nx,dist+1])
      visited[ny][nx]=1
failed=False
for i in range(M):
  if 0 in visited[i]:
    failed=True
    break

if failed:
  print(-1)
else:
  print(dist)

  