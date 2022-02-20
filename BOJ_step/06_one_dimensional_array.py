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


# 2562
num_arr = []
for i in range(9) :
  num_arr.append(int(input()))
  
max_idx = 0
for i in range(len(num_arr)) :
  if num_arr[i] > num_arr[max_idx] :
    max_idx = i;
print(num_arr[max_idx])
print(max_idx+1)


# 2577
# 근데 이거 ... 파이썬이면 그냥 함수 돌리면 되는 거 아닌가 ... 하 ...
a = int(input())
b = int(input())
c = int(input())
num = a*b*c
num_list = [0 for i in range(10)]

while num :
  num_list[num%10] += 1  # 나머지(1의자리) 개수 세기
  num = num // 10
  
for cnt in num_list :
  print(cnt)
  

# 2577 - 2
a = int(input())
b = int(input())
c = int(input())
num = a*b*c
num_list = [str(num).count(str(i)) for i in range(10)]
print(num_list)
for cnt in num_list :
  print(cnt)
  

# 3052