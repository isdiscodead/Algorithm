# 15596 정수 N개의 합
from types import GenericAlias


def solve(a:list) :
    ans = 0
    for i in a:
        ans += i
    return ans


# 4673 셀프넘버
# 집합 자료형 이용 -> 1~10000까지의 자연수 vs 1부터 10000까지 d(n)돌린 결과
natural = set(range(1,10001))
generated = set()

for i in range(1, 10001):
    for j in str(i): # 숫자 한 글자씩
        i += int(j)
    generated.add(i)

self_num = sorted(natural - generated)

for i in self_num :
    print(i)

# 리스트 이용 -> 
numbers = list(range(1, 100001))
remove_list = []  # 이후에 삭제할 숫자 list

for num in numbers :
    for n in str(num):
        num += int(n)  # 생성자가 있는 숫자
    if num <= 100000:  # 10,000보다 작거나 같을 때만,
        remove_list.append(num)  # append: 리스트에 요소를 추가할 때

for remove_num in set(remove_list) :  # set 으로 중복값 제거 후 numbers 중 생성자 있는 숫자 삭제 
    numbers.remove(remove_num)

for self_num in numbers :  # 생성자가 있는 숫자를 삭제한 수열 결과 리스트
    print(self_num)