-- 01. 이름이 없는 동물의 아이디
SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME IS NULL;


-- 02. 이름이 있는 동물의 아이디
SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME IS NOT NULL ORDER BY ANIMAL_ID; 


-- 03. NULL 처리하기
-- NVL(표현식1, 표현식2) 오라클 / IFNULL(표현식1, 표현식2) mysql : null일 경우 다른 표현으로 ~
-- NULLIF(표현식1, 표현식2) : 표현식1이 표현식2와 같으면 NULL, 아니면 표현식 1을 리턴
-- COALESCE(표현식1, 표현식2, ...) : NULL이 아닌 최초의 값 리턴
SELECT ANIMAL_TYPE, IFNULL(NAME, "No name"), SEX_UPON_INTAKE
FROM ANIMAL_INS ORDER BY ANIMAL_ID;