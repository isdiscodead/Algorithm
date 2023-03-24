/*
배열의 평균값
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(numbers) {
    var sum = 0;
    for ( var i=0 ; i < numbers.length ; i++ ) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// 빠른 풀이 : reduce() 함수를 사용해서 누적 합 계산 !! 
function solution(numbers) {
    return numbers.reduce((acc, cur) => acc + cur) / numbers.length
}