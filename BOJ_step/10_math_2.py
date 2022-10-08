# 11653 소인수분해 
from cmath import sqrt


n = int(input())
x = 2;

while ( n > 1 ) :
    if ( n % x == 0 ):
        n /= x
        print(x)
    else :
        x += 1


# 1978 소수 찾기
# 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력
from math import sqrt

n = int(input())
nums = list(map(int, input().split()))

def isPrime(num):
    if num < 2 :
        return False
    if num == 2 :
        return True

    i = 2
    while(i < num):
        if num % i == 0 :
            return False
        i += 1
        
    return True

count = 0
for i in range(n):
    if isPrime(nums[i]) :
        count += 1

print(count)


# 2581 소수 
low = int(input())
high = int(input())

minP = high
flag = False
sumP = 0

for i in range(low, high+1):
    if isPrime(i) :
        if ( i < minP ) :
            minP = i
        flag = True
        sumP += i 
        
if flag :
    print(sumP)
    print(minP)
else :
    print(-1)