#include <iostream>
using namespace std;

int main(void) {
    // 01. 구구단
    int dan;
    cin >> dan;
    for ( int i = 1 ; i < 10 ; i++ ) {
        cout << dan << " * " << i << " = " << dan * i << endl;
    } 

    // 02. 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
    int a, b, num;
    cin >> num;
    for ( int i = 0 ; i < num ; i++ ) {
        cin >> a >> b;
        cout << a + b;
    }

    return 0;
}