class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let a = 0;
        let b =0;
        let str=''
        while(a<word1.length && b<word2.length){
            str+=word1[a];
            str+=word2[b];
            a++;
            b++
        }
        while(a<word1.length){
            str+=word1[a]
            a++
        }
        while(b<word2.length){
            str+=word2[b]
            b++
        }
        return str
    }
}
