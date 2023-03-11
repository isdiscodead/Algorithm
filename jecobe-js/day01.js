// 몫 구하기
/*
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(num1, num2) {
    return Math.floor(num1 / num2);
}

// 빠른 풀이
/*
~은 not 연산자로, 비트 연산을 통해 2진수 숫자를 다 뒤집을 수 있음 0->1, 1->0
그렇게 되면 결과 값이 정수 -(n+1)이 되는데, 거기에 ~연산을 다시 진행하면 floor와 같은 동작을 함
~~ > Math.floor() > parseInt 순서로 빠른 수행 속도를 가짐 
 */
function solution(num1, num2) {
    return ~~(num1 / num2);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////


// 숫자 비교하기
/*
정수 num1과 num2가 매개변수로 주어집니다. 
두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
 */

// 생각하기 쉬운 풀이
function solution(num1, num2) {
    if ( num1 === num2 ) {
      return 1;
  } else {
      return -1;
  }
}

// 빠른 풀이 
function solution(num1, num2) {
    return num1 === num2 ? 1 : -1;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////


// 
