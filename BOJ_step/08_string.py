# 11654 아스키 코드
from gettext import find


code = input()
print( ord(code) )


# 11720 숫자의 합
size = int(input())
sentence = input()
total = 0
for i in range(size):
    total += int(sentence[i])
print(total)


# 10809 알파벳 찾기
sentence = input()
found = 0
alpha = ord('a')

while ( alpha <= ord('z') ) :
    found = sentence.find( chr(alpha) )
    alpha += 1;
    print(found, end=" ")


# 2675 문자열 반복
