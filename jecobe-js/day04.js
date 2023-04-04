/*
배열 회전시키기
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
 */

// 생각하기 쉬운 풀이
function solution(numbers, direction) {

    if ( direction === "left" ) {
        var tmp = numbers[0];
        for ( var i=0 ; i < numbers.length-1 ; i++ ) {
            numbers[i] = numbers[i+1]
        }
        numbers[numbers.length-1] = tmp;
        
    } else {
        var tmp = numbers[numbers.length-1];
        for ( var i=numbers.length-2 ; i >= 0 ; i-- ) {
            numbers[i+1] = numbers[i]
        }
        numbers[0] = tmp;
    }
    
    return numbers;
}

// 빠른 풀이
function solution(numbers, direction) {
    if(direction == "right") {
        pop_number = numbers.pop()
        numbers.unshift(pop_number)
        return numbers

    } else {
        shift_number = numbers.shift()
        numbers.push(shift_number)
        return numbers
    }
}

// 삼항 연산자 이용
function solution(numbers, direction) {
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
}



/*

*/