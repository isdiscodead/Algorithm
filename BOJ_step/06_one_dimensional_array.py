# 10818 
size = int(input())

# num = list(((map(int, input().split())))) 로 줄일 수 있음
arr = input().split()
for num in arr :
    num = int(num)
    
min = arr[0]
max = arr[0]

for num in arr :
    if num < min :
        min = num
    if num > max :
        max = num

print(min, max)