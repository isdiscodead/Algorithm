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