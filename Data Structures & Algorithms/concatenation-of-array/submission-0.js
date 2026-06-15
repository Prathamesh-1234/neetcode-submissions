class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let res=[];
        for(let i=0;i<nums.length;i++){
            res[i]=nums[i];
            res[i+nums.length]=nums[i];
        }
        return res;
    }
}
