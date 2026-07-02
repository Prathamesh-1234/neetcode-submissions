class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let n= nums.length;
        let res=[];
        let newArr=[]
        for(let i=1;i<=n;i++){
            res.push(i)
        }
        for(let items of res){
            if(!nums.includes(items)){
                newArr.push(items)
            }
        }
        return newArr
    }
}
