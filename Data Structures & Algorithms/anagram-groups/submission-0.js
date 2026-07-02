class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let str1=[];
        for(let items of strs){
            str1.push(items.split('').sort().join(''))
        }
        let map = new Map()
        for(let i=0;i<strs.length;i++){
            map.set(str1[i],[])
        }
        for(let i=0;i<strs.length;i++){
            map.get(str1[i]).push(strs[i])
        }
        return [...map.values()]
    }
}
