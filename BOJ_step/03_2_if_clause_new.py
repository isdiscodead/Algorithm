# 2525 오븐 시계
hour, minute = list(map(int, input().split()))
time = int(input())

if minute + time > 59 :
    hour += (minute+time)//60
    if hour >= 24 :
        hour -= 24
    minute = (minute+time)%60
else :
    minute += time

print(hour, minute)


# 2480 주사위 세개
a, b, c = list(map(int, input().split()))

if ( a == b == c ) :
    print(10000+a*1000)
elif (a == b):
    print(1000+a*100)
elif (b == c):
    print(1000+b*100)
elif (c == a):
    print(1000+a*100)
else:
    print(max(a, b, c)*100)