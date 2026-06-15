class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxRight =-1;
        for(let i=arr.length-1;i>=0;i--){
            let curr=arr[i];
            arr[i]=maxRight;
            maxRight=Math.max(maxRight,curr)
        }
        return arr
    }
}
