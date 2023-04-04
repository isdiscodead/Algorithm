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
외계행성의 나이
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. 
a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 
나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(age) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var answer = "";
    age = age.toString();

    for(let i=0; i<age.length; i++){
        answer += alphabet[age[i]];
    }
    return answer;
}

// 이론 활용 풀이
function solution(age) {
    var answer = ""
    
    for ( var i=0 ; i < age.toString().length ; i++ ) {
        answer += String.fromCharCode( parseInt(age.toString()[i]) + "a".charCodeAt(0) )
    }   
    
    return answer
}

// 빠른 풀이
function solution(age) {
    return age
      .toString()
      .split("")
      .map((v) => "abcdefghij"[v])
      .join("");
  }