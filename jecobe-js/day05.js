/* 
팩토리얼
`i`팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
i! ≤ n
*/

// 생각하기 쉬운 풀이
function solution(n) {
    var i = 1
    var fact = 1
    while ( true ) {
        if ( fact > n ) {
            return i-1;
        } else {
            i ++;
            fact *= i;
        }
    }
}


/*
k의 개수
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(i, j, k) {
    var answer = 0;

    for(let num=i; num<=j ; num++){
        //num의 길이가 한자리면 -> 그냥 카운트

            if(num == k){
                console.log(num)
                answer++;
                console.log(answer)
            }

        //num의 길이가 두자리 이상이면 -> 쪼개서 카운트
        if(num.toString().length >=2){
         arr = num.toString().split("")
            arr.forEach((num)=>{
                if(num == k){
                    answer ++
                }
            })
        }
    }

    return answer;
}

// 빠른 풀이
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}


/*
가까운 수
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(array2, n) {
    var array = [...array2].sort()
    var cal = array.map(v => Math.abs(v-n)) //요소에서 n뺀것을 절대값으로 표시
    var cal2 = Math.min(...cal) //제일 가까운수의 값
    var cal3 = cal.indexOf(cal2) //제일 가까운수의 인덱스

    return array[cal3];
}

// 빠른 풀이
function solution(array, n) {
    // sort()는 기본적으로 아스키코드 값으로 정렬하지만 매개변수로 들어오는 함수를 기준으로 정렬 가능
    // 정렬 기준 : n과의 절댓값이 작은 것이 앞으로 ... 2차 기준은 작은 수가 앞으로
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

    return array[0];
}


/*
잘라서 배열로 저장하기
문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(my_str, n) {
    var answer = [];

    for(let i=0; i < my_str.length; i+=n) {
        answer.push(my_str.substr(i, n));
    }

    return answer;
}