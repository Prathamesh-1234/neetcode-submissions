class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function isPal(s){
            for(let i =0;i<s.length;i++){
                if(s[i]!=s[s.length-1-i]){
                    return false
                }
            }
            return true
        }
        for (let i = 0; i < s.length / 2; i++) {
            let left = i;
            let right = s.length - 1 - i;

            if (s[left] !== s[right]) {
                let removeLeft = s.slice(0, left) + s.slice(left + 1);
                let removeRight = s.slice(0, right) + s.slice(right + 1);

                return isPal(removeLeft) || isPal(removeRight);
            }
        }

        return true;
    }
}
