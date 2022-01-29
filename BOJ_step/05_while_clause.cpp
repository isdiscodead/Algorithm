#include <iostream>
using namespace std;

int main(void) {
    int a, b;
    /*
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
    */

    // 03. 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 
    // 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다
    // N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
    cin >> a;
    cout << a;
    b = 100;
    int cycle = 0;
    while ( b != a ) {
        b = a/10 + a%10;
        if ( a < 10 ) {
            b = 0 + a;
        }
        b = (a%10)*10 + b%10;
        cycle++;
    }
    cout << cycle;
    
    return 0;
}