function solution(friends, gifts) {

    // TODO: 점수와 선물 개수는 별개임 !!! 로직 수정 필요
    
    var answer = 0;
    
    let score = {};
    
    for (let i=0 ; i<(friends.length - 1) ; i++) {
        for (let j=friends.length-1 ; j>i ; j--) {
            score[friends[i] + ' ' + friends[j]] = 0;
        }
    }
    
    for (let i=0 ; i<gifts.length ; i++) {
        let log = gifts[i].split(' ');

        if (log[0] + ' ' + log[1] in score) {
            score[log[0] + ' ' + log[1]] += 1;
        } else if (log[1] + ' ' + log[0] in score) {
            score[log[1] + ' ' + log[0]] -= 1;
        }
    }
    
    let friends_score = {};
    
    for (let i=0 ; i<friends.length ; i++) {
        friends_score[friends[i]] = 0;
    }
    
    
    for (let i=0 ; i<Object.keys(score).length ; i++) {
        const [sender, receiver] = Object.keys(score)[i].split(' ');
        
        friends_score[sender] += score[Object.keys(score)[i]];
        friends_score[receiver] -= score[Object.keys(score)[i]];
    }
    
    for (let i=0 ; i<Object.keys(score).length ; i++) {
        const [sender, receiver] = Object.keys(score)[i].split(' ');
        if (score[sender + ' ' + receiver] === 0 ) {
            if ((friends_score[sender] > friends_score[receiver])) {
                friends_score[sender] += 1;
            } else if ((friends_score[sender] < friends_score[receiver])) {
                friends_score[sender] += 1;
            }
        }
    }
    
    answer = Math.max(...Object.values(friends_score)); // array로 바로 넣을 수 없음
    
    return answer; 
}