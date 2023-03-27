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



/*
머쓱이보다 키 큰 사람
머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 
머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
*/

// 생각하기 쉬운 풀이 
function solution(array, height) {
    var cnt = 0;
    for ( var i=0 ; i < array.length ; i++ ) {
        if ( array[i] > height ) {
            cnt ++;
        }
    }
    return cnt;
}

// 빠른 풀이 : filter() 함수를 사용해서 키 큰 사람의 배열 생성
function solution(array, height) {
    return array.filter(item => item > height).length;
}



/*
중복된 숫자 개수
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
*/

// 생각하기 쉬운 풀이
function solution(array, n) {
    var cnt = 0;
    for ( var i=0 ; i < array.length ; i++ ) {
        if ( array[i] === n ) {
            cnt++;
        }
    }
    return cnt;
}

// 빠른 풀이 : filter()
function solution(array, n) {
    return array.filter(v=>v===n).length;
}



/*
피자 나눠먹기
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
피자를 나눠먹을 사람의 수 n이 주어질 때, 
모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
 */

// 생각하기 쉬운 풀이
function solution(n) {
    return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}

// 빠른 풀이 
function solution(n) {
    return Math.ceil(n / 7)
}



/*
짝수 홀수 개수 
정수가 담긴 리스트 num_list가 주어질 때, 
num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/