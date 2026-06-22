class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let map =new Map();
        for(let c of s){
            map.set(c,(map.get(c)||0)+1)
        }
        let maxOdd = -Infinity;
        let minEven = Infinity;
        for (let freq of map.values()) {
            if (freq % 2 === 0) {
                minEven = Math.min(minEven, freq);
            } else {
                maxOdd = Math.max(maxOdd, freq);
            }
        }
        return maxOdd - minEven;
    }
}
