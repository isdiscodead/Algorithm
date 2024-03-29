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



/*
특정 문자 제거하기
문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 기본 풀이
function solution(my_string, letter) {
    var answer = "";
    
    for ( var i=0 ; i < my_string.length ; i++ ) {
        if ( my_string.charAt(i) !== letter ) {
            answer += my_string.charAt(i);
        }
    }
    
    return answer;
}

// 빠른 풀이 replaceAll
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

// 빠른 풀이 split 
function solution(my_string, letter) {
    return my_string.split(letter).join('')
}



/*
배열의 유사도
두 배열이 얼마나 유사한지 확인해보려고 합니다. 
문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
 */

// 시간 초과 가능한 오답 
function solution(s1, s2) {
    var answer = 0;
    for (var i = 0; i < s1.length; i++){
        for (var j = 0; j < s2.length; j++){
            if(s1[i] === s2[j]) answer++;
        }
    }
    return answer;
}

// 빠른 풀이
function solution(s1, s2) {
    var answer = 0;
     
     for ( var i=0 ; i < s1.length ; i++ ) {
         if ( s2.find(element => element === s1[i] ) ) {
             answer ++;
         }
     } 
     
     return answer;
 }

 // 빠른 풀이 2
 function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}