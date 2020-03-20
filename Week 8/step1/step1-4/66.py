a = int(input())
cnt = 0
arr = list(map(int, input().split()))
for i in range(1,a):
    if arr[i]>arr[i-1]:
        cnt+=1
print(cnt)