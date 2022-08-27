# 1712 
a, b, c = tuple(input().split())
a = int(a)
b = int(b)
c = int(c)

# C*N = A + B*N
# C*N - B*N = A
# N = A / (C - B)

# 가변 비용이 노트북 가격보다 같거나 크면 손익 분기점 존재 X 
if b >= c :
    print(-1)
else :
    print( a // (c - b) + 1 )


# 2292 벌집 
