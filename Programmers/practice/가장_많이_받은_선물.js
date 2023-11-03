function solution(bandage, health, attacks) {
    let answer = health;
    
    for ( let i=0 ; i < attacks.length ; i++ ) {

        if (i!==0) {
            const timeDiff = attacks[i][0] - attacks[i-1][0];
            
            // bandage[0]초 보다 작게 감았을 경우 bandage[1]*n
            if ( attacks[i][0] - attacks[i-1][0] > 1 ) { // 1초 안으로 공격 시 붕대 감지 못함
                if ( bandage[0] >= timeDiff ) {
                    answer += bandage[1] * (timeDiff-1);
                    
                // bandage[0]초 이상 감았을 경우 bandage[1]*n + bandage[2]
                } else {
                    answer += bandage[1] * (timeDiff-1) + bandage[2];
                    // 2t 이상 성공 시 추가 회복 
                    if ( bandage[0]*2 <= timeDiff) {
                        answer += Math.floor(timeDiff/bandage[0]-1) * bandage[2];
                    }
                }
            }
        }
        
        // 체력이 max 이상이 되었다면 최대 체력으로
        if ( answer > health ) {
            answer = health;
        }
        
        answer -= attacks[i][1];

        // 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return
        if ( answer <= 0 ) {
            return -1;
        }
    }
    return answer;
}