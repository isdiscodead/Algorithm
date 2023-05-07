/*
진료 순서 정하기
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
*/

// ✅ sort() 함수는 원본 배열을 변경하므로 배열을 복사해서 작업해줘야 함 -> slice() 또는 spread 문법 활용

// 반복문 사용
function solution(emergency) {
    var answer = [];
		// 여기서 slice()를 사용하지 않으면 원본 배열이 변경되어 제대로 동작하지 않음! 
    var sorted = emergency.slice().sort((a, b) => b-a);
    for(let i = 0; i < emergency.length; i++){
        answer.push(sorted.indexOf(emergency[i]) + 1);
    }

    return answer;
}

// map() 사용
function solution(emergency) {
    let answer = [];
		// spread 문법으로 slice()와 동일하게 배열을 복사하는 동작
    let sorted = [...emergency].sort((a,b)=>b-a);
    
    emergency.map((element, idx) => {
        answer.push(sorted.indexOf(element)+1);
    })
    
    return answer;
}



/*
영어가 싫어요
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
*/

function solution(numbers) {
    // 경우의 수가 10개 뿐이므로 숫자 단어를 모두 배열에 넣음
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < num.length; i++){
        // split을 num[i] 기준으로 자르고 잘린곳을 i로 메꿔줌
        numbers = numbers.split(num[i]).join(i);
    }
    
  	// number로 형 변환하여 return 
    return Number(numbers);
}

// 빠른 풀이
// reduce()는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환함
// arr.reduce(callback [, initialValue])
// reduce의 callback 함수는 순서대로 accumulator( 합계 ), item( 요소 ), index( 인덱스 ), array( 배열 )을 인자로 받음 
// 초기값을 주어진 n으로 두고, 숫자 배열에 있는 숫자를 하나씩 가져와서 합계( 초기값부터 시작 )에서 replaceAll 해서 해당 인덱스(=숫자)로 대체 ... 
var solution = n => Number(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((t,s,i)=>t.replaceAll(s,i), n))


/*
외계어 사전 
PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 
알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. 
spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
*/

// 생각하기 쉬운 풀이
function solution(spell, dic) {
    const isThere = [];
    
    dic.forEach((word) => {
        let count = 0;
        
        spell.forEach((item) => {
            if ( word.includes(item) ){
                count += 1;
            }
        })
        
        if ( count === spell.length ){
            isThere.push(word);
        }
    })
    
    return isThere.length === 0 ? 2 : 1;
}