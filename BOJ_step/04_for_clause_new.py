# 25304 영수증
total = int(input())
tot_cnt = int(input())

# EOF 처리 -> try-except 사용
while (True) :
    try:
        amount, cnt = list(map(int, input().split()))
        total -= amount * cnt
        tot_cnt -= 1
    except:
        break

if total == 0:
    print('Yes') 
else:
    print('No')


# 25314 코딩은 체육과목 입니다
