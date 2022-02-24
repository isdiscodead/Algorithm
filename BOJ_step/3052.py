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