/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0 ; i< nums.length ; i++){
        for(let j=0 ; j< nums.length ; j++){
            let sum = nums[i] + nums[j]
            if(i != j){
            if ( sum == target ){
                return [i,j]
            }
        }
        }
    }
    
};
