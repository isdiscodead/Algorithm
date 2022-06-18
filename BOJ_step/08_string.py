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
n = int(input())
for i in range(n):
    user = input().split()
    time = int(user[0])
    sentence = user[1]
    for i in sentence:
        print(i*time, end="")
    print()


# 1157 단어 공부
word = input().lower()
alpha = ord('a')
max_alpha = alpha
flag = False
    
for i in range( 26 ):
    if ( word.count( chr(alpha) ) > word.count( chr(max_alpha) )  ):
        max_alpha = alpha
        flag = False
    elif ( word.count( chr(alpha) ) == word.count( chr(max_alpha) )  ):
        flag = True
    alpha += 1
    
if flag :
    print("?")
else :
    print( chr(max_alpha).upper() )