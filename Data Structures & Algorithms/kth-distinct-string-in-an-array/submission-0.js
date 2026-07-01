class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let res=[]
        let map = new Map();
        for(let item of arr){
            map.set(item,(map.get(item)||0)+1)
        }
        for(let [key,values] of map){
            if(map.get(key)==1){
                res.push(key)
            }
        }
        return res[k-1]||""

    }
}
