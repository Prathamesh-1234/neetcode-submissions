class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1=new Map();
        let map2=new Map();
        if(s.length!==t.length)return false;
        for(let j=0;j<s.length;j++){
            map1.set(s[j],(map1.get(s[j])||0)+1)
            map2.set(t[j],(map2.get(t[j])||0)+1)
        }
        for(let [key,value] of map1){
            if(map2.get(key)!==value){
                return false
            }
        }
        return true
    }
}
