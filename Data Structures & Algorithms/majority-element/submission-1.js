class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map();
        for(let num of nums){
            map.set(num,(map.get(num)||0)+1)
        }
        let max =-Infinity;
        let ans=nums[0]
        for(let [key,value] of map){
            if(value>max){
                max=value;
                ans=key
            }
        }
        return ans
    }
}
