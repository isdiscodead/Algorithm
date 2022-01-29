#include <iostream>
using namespace std;

int main(void) {
    int a, b;
    // 01. 두 정수 A와 B를 입력받은 다음, A+B를 출력
    while ( true ) {
        cin >> a >> b;
        if ( a==0 && b==0 ) {
            break;
        } 
        cout << a+b << "\n";
    }
    
    // 02. 입력이 끝날 때까지 A+B를 출력하는 문제. EOF에 대해 알아 보세요.
    // 파일 끝(End of File, EOF[1])는 데이터 소스로부터 더 이상 읽을 수 있는 데이터가 없음을 나타냄
    // 읽어오는 값이 몇 개인지 모르기 때문에 무한 반복 시 이러한 오류가 발생하는 것.
    // while (scanf("%d %d", &x, &y) != EOF) 조건도 사용 가능 ! 
    // python에서는 try - except EOFError 사용 
    while ( cin >> a ) {
        cin >> b;
        cout << a+b << "\n";
    }
    
    return 0;
}