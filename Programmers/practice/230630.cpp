// 카펫
#include <string>
#include <vector>

using namespace std;

vector<int> solution(int brown, int yellow) {
    vector<int> answer;

    int wh = ( brown / 2 ) + 2;
    int small_wh = wh - 4;


    for ( int i=1 ; i <= wh/2 ; i++ ) {
        int height = i;
        int width = wh - i;

        if ( (width-2) * (height-2) == yellow ) {
            answer.push_back(width);
            answer.push_back(height);
            return answer;
        }
    }
}