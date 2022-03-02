-- 01. 최댓값 구하기
SELECT max(DATETIME) FROM ANIMAL_INS;


-- 02. 최솟값 구하기
SELECT min(DATETIME) FROM ANIMAL_INS;


-- 03. 동물 수 구하기
SELECT count(ANIMAL_ID) FROM ANIMAL_INS;


-- 04. 중복 제거하기
-- 중복 제거는 DISTINCT 키워드를 사용하지만 count()안에 들어갈 특정 컬럼만 체크하기 위해서는 매개변수 안에 !
-- null 체크는 IS NULL 또는 IS NOT NULL을 사용
SELECT count(DISTINCT NAME) FROM ANIMAL_INS WHERE NAME IS not null;