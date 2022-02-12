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
  num_arr.append(input())
  
max_idx = 0
for i in range(len(num_arr)) :
  if num_arr[i] > num_arr[max_idx] :
    max_idx = i;
print(num_arr[max_idx])
print(max_idx+1)
