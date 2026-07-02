class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const set = new Set(nums);
        const ans = [];

        for (let i = 1; i <= nums.length; i++) {
            if (!set.has(i)) {
                ans.push(i);
            }
        }

        return ans;
    }
}
