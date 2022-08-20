# 1712 
a, b, c = tuple(input().split())
num = 0

try: 
    while True:
        if ( a + b*num < c*num ) :
            break;
        num += 1
except:
    num = -1

print(num)