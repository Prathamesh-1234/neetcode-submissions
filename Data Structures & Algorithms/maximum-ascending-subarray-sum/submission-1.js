class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let sum = nums[0];
        let ans = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                sum += nums[i];
            } else {
                sum = nums[i];
            }

            ans = Math.max(ans, sum);
        }

        return ans;
    }
}