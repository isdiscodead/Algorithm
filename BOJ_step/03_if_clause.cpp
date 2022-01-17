#include <iostream>
using namespace std;

int main(void) {
    // 01. 두 정수 A와 B가 주어졌을 때, A와 B와 비교하는 프로그램
    int a, b;
    cin >> a >> b;
    if ( a > b ) {
        cout << ">";
    } else if ( a < b ) {
        cout << "<";
    } else {
        cout << "==";
    }


    // 02. 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력
    int score;
    cin >> score;
    if ( score >= 90 ) {
        cout << "A";
    } else if ( score >= 80 ) {
        cout << "B";
    } else if ( score >= 70 ) {
        cout << "C";
    } else if ( score >= 60 ) {
        cout << "D";
    } else {
        cout << "F";
    }


    // 03. 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
    int year;
    cin >> year;
    if ( ( year%4==0 && year%100!=0 ) || year%400==0 ) {
        cout << 1;
    } else {
        cout << 0;
    }


    // 04. 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 
    int x, y;
    cin >> x >> y;
    if ( x < 0 && y < 0 ) {
        cout << 3;
    } else if ( x > 0 && y > 0 ) {
        cout << 1;
    } else if ( x > 0 && y < 0 ) {
        cout << 4;
    } else {
        cout << 2;
    }
     
    // 4번 문제 숏코딩
    // 01. 1 + y가 음수라면 2, 양수라면 0 + x와 y의 부호가 다르면 1 같으면 0
    // y가 음수일 경우 -> 3 또는 4사분면이므로 최소 3
    // x, y의 부호가 같을 경우 -> 1또는 3이므로 0을 더해줌 
    cout << 1 + (y<0)*2 + (x*y<0);
    // 02. x가 양수 -> 1또는 4 ( y가 양수면 1, 음수면 4 ) 같은 방식으로 x<0 케이스
    cout << ( x>0 ? ( y>0 ? 1:4 ) : ( y>0 ? 2:3 ) )


    // 05. 현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하라
    // 창영이 방법 -> 45분 일찍 설정하기
    int h, m;
    cin >> h >> m;
    if( m < 45 ) {
        if ( h == 0 ) {
            h = 24;
        }
        h -= 1;
        m += 15;
    } else {
        m -= 45;
    }
    cout << h << ' ' << m;
}