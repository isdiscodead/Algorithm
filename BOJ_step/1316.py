# 1316 그룹 단어 체커
size = int(input())

def check(st) :
    for i in "abcdefghijklmnopqrstuvwxyz":
        # 두 개 이상 있는 경우
        l = st.find(i)
        r = st.rfind(i)
        if l != r :
            # 연이어 있는 경우
            if st.find(i*(r-l)) != -1 :
              continue
            # 그룹 단어 X
            else :
              return False
    return True

cnt = 0
for i in range(size) :
    if check(input()) :
        cnt += 1

print(cnt)
