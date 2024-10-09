/*
Given an integer array nums, find the 
subarray
with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

*/

function maxSubArray(nums: number[]): number {
    const sums: number[] = new Array(nums.length)
    let currentSum: number = nums[0]
    sums[0] = nums[0]
    let i = 1
    for(i = 1; i < nums.length; i++){
        if(currentSum + nums[i] >= nums[i]){
            currentSum += nums[i]
        }else{
            currentSum = nums[i]
        }

        sums[i] = Math.max(sums[i-1], currentSum)
    }
    return sums[i-1]
};
