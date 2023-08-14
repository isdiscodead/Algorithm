#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

vector<string> split(string sentence, string sep) {
    vector<string> sol;
    int curIdx = 0;
    for ( int i=0 ; i <= sentence.length() && curIdx <= sentence.length() ; i++ ) {
        if ( ! sep.compare( sentence.substr(i, sep.length()) )) {
            sol.push_back( sentence.substr(curIdx, i - curIdx) );
            curIdx = i+sep.length();
            i += sep.length();
        }
        if ( i == sentence.length() ) {
            sol.push_back( sentence.substr(curIdx) );
        }
    }
    return sol;
}

vector<int> solution(vector<string> info, vector<string> query) {
    vector<int> answer(query.size(), 0);
    
    for ( int i=0 ; i < query.size() ; i++ ) {
        string queryItem = query[i];
        unsigned long long queryScore = stoull( queryItem.substr(queryItem.rfind(" ")) );
        queryItem = queryItem.substr(0, queryItem.rfind(" "));
        vector<string> queryItems = split(queryItem, " and ");
        
        for ( int j=0 ; j < info.size() ; j++ ) {
            string infoItem = info[i];
            unsigned long long infoScore = stoull( infoItem.substr(infoItem.rfind(" ")) );
            infoItem = infoItem.substr(0, infoItem.rfind(" "));
            vector<string> infoItems = split(infoItem, " and ");
            
            for ( int k=0 ; k < infoItems.size() ; k++ ) {
                if ( infoItems[k] == "-" ) {
                    infoItems[k] = queryItems[k];
                }
            }
            
            // query와 info 비교
            if ( infoItems == queryItems && queryScore <= infoScore ) {
                answer[i]++;
            }
            
        }        
    }
    
    return answer;
}