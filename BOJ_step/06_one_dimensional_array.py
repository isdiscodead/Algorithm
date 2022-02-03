# 10818 
size = int(input())
arr = input().split()

for i in range(len(arr)) :
  arr[i] = int(arr[i])

min = arr[0]
max = arr[0]

for num in arr :
  if num <= min :
    min = num
  if num >= max :
    max = num

print(min, max)
