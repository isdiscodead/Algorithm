// JadenCase 문자열 만들기

#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    string answer = "";
    bool flag = true;
    
    for ( int i=0 ; i < s.length() ; i++ ) {
        if ( flag ) {
            answer += toupper(s[i]);
            flag = false;
        } else {
            answer += tolower(s[i]);
        }
        
        if ( s[i] == ' ' ) {
            flag = true;
        }
    }
    
    return answer;
}