class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s=s.trim().split(' ');
        let n = s[s.length-1].length
        return n
    }
}
