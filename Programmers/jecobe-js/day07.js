// 등수 매기기
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
// 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 
// 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(score) {
    let avg = score.map(v=>(v[0]+v[1])/2);
    let sorted = avg.slice().sort((a,b)=>b-a);
    return avg.map(v => sorted.indexOf(v) + 1);
}
// 빠른 풀이
function solution(score) {
    return score.map((el) => {
        return (
        score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
        );
    });
}


// 저주의 숫자 3
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 
// 3x 마을 사람들의 숫자는 다음과 같습니다. ( 표 생략 )
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.
function solution(n) {
    let ans = 0;
    
    for(let i = 1; i <= n; i++){
        ans += 1;
        
        while(true){
            if(ans % 3 === 0 || String(ans).includes("3")){
                ans += 1;   
                continue;
            }
            break;
        }
    }
    return ans;
}
// 빠른 풀이
function solution(n) {
    let arr = [];
    let num = 0;
    while (arr.length !== n && ++num) if (num%3!==0 && !(''+num).includes('3')) arr.push(num);
    return arr.pop();
}