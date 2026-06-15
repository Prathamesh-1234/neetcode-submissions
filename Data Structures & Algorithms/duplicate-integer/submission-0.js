class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()
        for(let num of nums){
            map.set(num,(map.get(num)||0)+1);
        }
        for(let [key,value] of map){
            if(map.get(key)>1){
                return true
            }
        }
        return false
    }
}
