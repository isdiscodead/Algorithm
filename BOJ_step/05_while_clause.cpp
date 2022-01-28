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
    
    // 02. 
    
    return 0;
}