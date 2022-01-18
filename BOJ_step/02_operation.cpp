#include <iostream>
using namespace std;

int main(void) {
    int a, b, c;
    // 05. 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
    cin >> a >> b;
    cout << a+b;

    // 06. 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
    cin >> a >> b;
    cout << a - b;

    // 07. 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.
    cin >> a >> b;
    cout << a * b;

    // 08. 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
    cin >> a >> b;
    cout.precision(12);   // 문제에서 10^-9까지 오차 허용한다 했으므로 그 이상으로 출력
    cout << a / (double)b;
    
    // 09. 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
    cin >> a >> b;
    cout << a+b << endl << a-b << endl << a*b << endl << a/b << endl << a%b;

    // 10. 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
    cin >> a >> b >> c;
    cout << (a+b)%c << endl << ((a%c) + (b%c))%c << endl << (a*b)%c << endl << ((a%c) * (b%c))%c; 
    
    // 11. 세자리수 곱셈
    cin >> a >> b;
    int units = (b % 10)*a;
    int tens = ((b%100)/10) * a;
    int hundreds = (b / 100) * a;
    cout << units << endl << tens << endl << hundreds;
    cout << endl << units + tens*10 + hundreds*100;

    return 0;
}
