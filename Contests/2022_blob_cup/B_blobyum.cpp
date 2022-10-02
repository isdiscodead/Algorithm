#include <iostream>
using namespace std;

int main(void) {
    int total_pie, eat_pie, a, remain, sum, idx;
    cin >> total_pie >> eat_pie;

    int* delicious;
    delicious = new int[total_pie];

    for ( int i=0 ; i < total_pie ; i++ ) {
        cin >> a;
        delicious[i] = a;
    }

    int max_delicious = 0;

    for ( int i=0 ; i < total_pie ; i++ ) {
        idx = i + eat_pie -1;
        remain = 0;
        sum = 0;

        if ( idx > total_pie-1 ) {
            remain = total_pie-i;
            idx = total_pie -1;
        }
        
        for ( int j=0 ; j<remain ; j++ ) {
            sum += delicious[j];
        }
        for ( int j=0 ; j<eat_pie-remain ; j++ ) {
            sum += delicious[idx-j];
        }


        if ( max_delicious < sum ) {
            max_delicious = sum;
        }
    }

    cout << max_delicious;
}