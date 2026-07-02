class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        // Count frequency
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Convert to array and sort by frequency
        let arr = [...map.entries()];

        arr.sort((a, b) => b[1] - a[1]);

        // Take first k keys
        let res = [];

        for (let i = 0; i < k; i++) {
            res.push(arr[i][0]);
        }

        return res;

    }
}
