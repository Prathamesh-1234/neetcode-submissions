class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res=[]
        for(let i of nums1){
            let max=-1;
            let left=nums2.indexOf(i);
            while(left<nums2.length-1){
                if(nums2[left+1]>i){
                    max=nums2[left+1]
                    break   
                }
                left++;
            }
            res.push(max)
        }
        return res;
    }
}
