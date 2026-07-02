class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        grid=grid.flat();
        let n = grid.length;
        let map = new Map();
        let set = new Set(grid);
        let ans=[]
        for(let item of grid){
            map.set(item,(map.get(item)||0)+1)
        }
        for(let [key,values] of map){
            if(map.get(key)>1){
                let dup=key;
                ans.push(dup)
            }
        }
        for(let i=1;i<=n;i++){
            if(!set.has(i)){
                ans.push(i)
            }
        }
        return ans
    }
}
