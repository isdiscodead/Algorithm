# 2021 Dev-Maching : 웹 백엔드 
# 로또의 최고 순위와 최저 순위 

def solution(lottos, win_nums):
    wrong = 0
    unk = lottos.count(0)

    for i in range(len(lottos)):
        if lottos[i] not in win_nums and lottos[i] != 0 :
            wrong += 1

    min_prize = wrong + 1 + unk if unk < 6 else 6
    max_prize = wrong + 1

    if wrong == 6:
        max_prize = min_prize = 6

    return [max_prize , min_prize]


# 모범 답안 1
def solution2(lottos, win_nums):
    rank=[6,6,5,4,3,2,1]

    unk = lottos.count(0) # 0의 개수
    ans = 0
    
    for x in lottos:
        if x in win_nums:
            ans += 1
    return rank[unk + ans], rank[ans]


# 모범 답안 2
def solution3(lottos, win_nums):
    unk = lottos.count(0)
    a = [x for x in lottos if x in win_nums]

    max = unk+len(a)
    min = len(a)

    max = 7-max if max>=1 else 6
    min = 7-min if min>=1 else 6

    return [max,min]