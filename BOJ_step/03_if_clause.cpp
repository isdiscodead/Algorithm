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
 
}