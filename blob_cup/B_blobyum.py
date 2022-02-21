pie_cnt = input()
total_pie = int(pie_cnt.split()[0])
eat_pie = int(pie_cnt.split()[1])

# 맛 척도 리스트
delicious = list(map(int, input().split()))
max_delicious = 0

for i in range(total_pie) :
    idx = i+eat_pie-1
    remain = 0;
    tmp = 0

    if idx > total_pie-1 : 
        remain = total_pie -i
        idx = total_pie-1

    for j in range(remain) :
        tmp += delicious[j]
    for j in range(eat_pie - remain) :
        tmp += delicious[idx-j]

    if max_delicious < tmp :
        max_delicious = tmp;

print(max_delicious)