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


