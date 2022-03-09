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
arr = []
cnt = 0

for i in range(10) :
    arr.append(int(input()))
    arr[i] %= 42

for i in range(42) :
    if (arr.count(i) == 1) :
        cnt += 1
    if (arr.count(i) != 1 and arr.count(i) != 0) :
        cnt += 1

print(cnt) 


# 1546 평균
cnt = int(input())
sum = 0

score = list(map(int, input().split()))

max_value = max(score)

for i in range(cnt) :
  score[i] = score[i]/max_value*100
  sum += score[i]

print(sum/cnt)


# 8958 ox 퀴즈
size = int(input())
arr = []

for i in range(size):
  test = input()
  score = 0
  cnt = 0
  for i in range(len(test)):
    flag = False
    if test[i] == 'O':
      cnt += 1
      flag = True
      if flag :
        score += cnt
      else :
        score += 1
        
    else :
      flag = False
      cnt = 0
      
  arr.append(score)

for i in arr:
  print(i)

# 수식 이용
import sys

def combo_score(x):
    return int(x * (x+1) / 2)

for i in range(int(sys.stdin.readline())):
    o_count = list(sys.stdin.readline().rstrip().split('X'))
    score = 0
    for element in o_count:
        score += combo_score(len(element))
    combo = 0
    print(score)
