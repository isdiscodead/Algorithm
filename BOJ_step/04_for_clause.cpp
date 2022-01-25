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
        cout << a + b << endl;
    }

    // 03. n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
    int n, sum;
    cin >> n;
    for ( sum = 0 ; 0 < n ; n-- ) {
        sum += n;
    }
    cout << sum;

    // 04. 빠른 A+B
    // 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다
    // C++을 사용하고 있다면, cin.tie(NULL)과 ios::sync_with_stdio(false)를 둘 다 적용, endl 대신 개행문자(\n) 사용
    // Java를 사용하고 있다면, Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용, BufferedWriter.flush는 맨 마지막에 한 번만
    // Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가
    int cnt;
    cin >> cnt;
    // 최적화 
    cin.tie(NULL);
    ios::sync_with_stdio(false);
    for ( int i=0 ; i < cnt ; i++ ) {
        cin >> a >> b;
        cout << a + b << "\n";
    }

    // 05. 
    return 0;
}