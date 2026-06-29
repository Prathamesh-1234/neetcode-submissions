class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let count_i = 1;
        let count_d = 1;
        let ans = 1;

        let i = 1;

        while (i < nums.length) {
            if (nums[i] > nums[i - 1]) {
                count_i++;
                count_d = 1;
            } else if (nums[i] < nums[i - 1]) {
                count_d++;
                count_i = 1;
            } else {
                count_i = 1;
                count_d = 1;
            }

            ans = Math.max(ans, count_i, count_d);
            i++;
        }

        return ans;
    }
}