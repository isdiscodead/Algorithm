/*
배열 두  배 만들기
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두 배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(numbers) {
    var answer = numbers;
    
    for (var i=0 ; i < numbers.length ; i++ ) {
        answer[i] = answer[i] * 2;
    }
    
    return answer;
}

// 빠른 풀이
const solution = (numbers) => numbers.map((n) => n * 2)



/*
문자열 뒤집기 
문자열 my_string이 매개변수로 주어집니다. 
my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(my_string) {
    var answer = '';
    for ( var i=my_string.length-1 ; i >= 0 ; i-- ) {
        answer += my_string.charAt(i);
    }
    return answer;
}

// 빠른 풀이 : split()
function solution(my_string) {
    return my_string.split('').reverse().join('');
}

// 빠른 풀이 : spread
function solution(my_string) {
    return [...my_string].reverse().join('');
}
