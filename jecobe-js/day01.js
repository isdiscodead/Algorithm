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


// 나이 계산하기
/*
머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 
나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(age) {
    return 2022 - age + 1;
}

// 빠른 풀이
// 별 차이는 없음 … 오히려 의미를 알기엔 위 풀이보다 어려울 수 있다는 점 참고 !! 
function solution(age) {
    return 2023 - age;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////


// 각도기
/*
각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 
각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
*/

// 쉬운 풀이
// 제한 사항에 0 < angle ≤ 180이라고 명시 되어 있으므로 0도 미만 혹은 180 초과는 고려할 필요 X 
function solution(angle) {
    if ( angle < 90 ) {
        return 1;
    } else if ( angle === 90 ) {
        return 2;
    } else if ( angle < 180 ) {
        return 3;
    } else {
        return 4;
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////


// 양꼬치
/*
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 
총 얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
*/

// 쉬운 풀이
function solution(n, k) {
    // 먼저 서비스로 제공될 음료수에 대해 계산
if ( n >= 10 ) {
    k -= ~~(n/10);
}
return n*12000 + k*2000;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////


// 짝수의 합
/*
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(n) {
    var result = 0;
    for ( var i=1 ; i<=n ; i++ ) {
        if ( i % 2 == 0 ) {
            result += i;
        }
    }
    return result;
}

// 빠른 풀이 1 : 반복 줄이기 
function solution(n) {
    var result = 0;
    for ( var i=0 ; i<=n ; i+=2 ) {
        result += i;
    }
    return result;
}

// 빠른 풀이 2 : 수열 사용
function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}

// 빠른 풀이 3 : method chaining 사용
function solution(n) {
return Array(n) // n개의 원소를 가지는 빈 배열 생성
    .fill() // 인자가 없으므로 배열이 모두 undefined로 채워짐 
    .map((_, i) => i + 1) // 각 요소를 i+1의 값으로 채움 ( _ = 값, i = index )
    .filter((v) => v % 2 === 0) // 짝수 값 v만 필터링
    .reduce((acc, cur) => acc + cur, 0); // 짝수 값의 누적 합을 계산, 0은 초기값
}