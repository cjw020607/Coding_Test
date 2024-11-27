def fact(num):
  total=1
  for i in range(1,num+1):
    total*=i
  return total
    
n=int(input())
end=n//2
result=0
for i in range(end+1):
  result+=(fact(n-i)//(fact(n-i*2)*fact(i)))%10007

print(result%10007)