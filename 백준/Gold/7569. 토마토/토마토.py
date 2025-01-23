from collections import deque
M,N,H=map(int,input().split())
arr=[]
visited=[[[0]*M for _ in range(N)] for _ in range(H)]
tomato=[]
for i in range(H):
  a=[]
  for j in range(N):
    b=list(map(int,input().split()))
    a.append(b)
    for k in range(len(b)):
      if b[k]==1:
        tomato.append([i,j,k,0])
        visited[i][j][k]=1
      elif b[k]==-1:
        visited[i][j][k]=-1
  arr.append(a)
queue=deque(tomato)
while len(queue)>0:
  [h,y,x,date]=queue.popleft()
  direction=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]
  for [dh,dy,dx] in direction:
    nh=dh+h
    ny=dy+y
    nx=dx+x
    if nh>=0 and nh<H and ny>=0 and ny<N and nx>=0 and nx<M and visited[nh][ny][nx]==0 and arr[nh][ny][nx]==0:
      visited[nh][ny][nx]=1
      queue.append([nh,ny,nx,date+1])

fail=False
for h in range(H):
  for y in range(N):
    if 0 in visited[h][y]:
      fail=True
      break
  if fail:
    break
if fail:
  print(-1)
else:
  print(date)