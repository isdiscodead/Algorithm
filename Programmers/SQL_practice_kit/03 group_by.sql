-- 01. 고양이와 개는 몇 마리 있을까
-- group by 절은 뒤에! 근데 order by 절이 더 뒤에 !! 
SELECT ANIMAL_TYPE, count(ANIMAL_TYPE) FROM ANIMAL_INS GROUP BY ANIMAL_TYPE ORDER BY ANIMAL_TYPE;


-- 02. 동명 동물 수 찾기
-- SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY
SELECT NAME, count(NAME) FROM ANIMAL_INS 
WHERE NAME IS NOT NULL 
GROUP BY NAME 
HAVING count(NAME)>1
ORDER BY NAME;


-- 03. 입양 시각 구하기(1)
SELECT HOUR(DATETIME) as HOUR, count(HOUR(DATETIME)) as COUNT
FROM ANIMAL_OUTS
WHERE HOUR(DATETIME) >= 9 AND HOUR(DATETIME) < 20
GROUP BY HOUR(DATETIME)
ORDER BY 1;


-- 04. 입양 시각 구하기(2)
WITH RECURSIVE all_animal as (
    SELECT 0 as "HOUR"
    UNION all
    SELECT HOUR + 1 FROM all_animal
    WHERE HOUR < 23
)

SELECT HOUR, count(hour(datetime)) as 'COUNT' from all_animal
LEFT OUTER JOIN ANIMAL_OUTS
ON hour(DATETIME) = HOUR
group by HOUR
order by HOUR;


-- WITH RECURSIVE 구문을 이용한 리스트 생성
WITH RECURSIVE 테이블명 AS(
SELECT 초기값 AS 컬럼별명1
UNION ALL
SELECT 컬럼별명1 계산식
FROM 테이블명
WHERE 제어문
)


-- LEFT OUTER JOIN : 왼쪽에 오는 테이블 전부 나오게 !
-- ON은 조건절임 ! @_@
LEFT OUTER JOIN animal_outs
ON hour(DATETIME) = HOUR;