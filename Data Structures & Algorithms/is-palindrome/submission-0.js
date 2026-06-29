class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res='';
        s=s.toLowerCase()
        let apl='qwertyuiopasdfghjklzxcvbnm1234567890';
        for(let i=0;i<s.length;i++){
            if(apl.includes(s[i])){
                res+=s[i];
            }
        }
        let flag=true
        for(let j=0;j<res.length/2;j++){
            if(res[j]!==res[res.length-1-j]){
                flag=false
            }
        }
        return flag
    }
}
