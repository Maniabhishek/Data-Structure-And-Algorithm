> Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and returns its sum and prints the subarray.

Example 1:
Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 
Output: 6 
Explanation: [4,-1,2,1] has the largest sum = 6. 

Examples 2: 
Input: arr = [1] 
Output: 1 
Explanation: Array has only one element and which is giving positive sum of 1. 

- the problem states that we need to find the maximum subarray sum for an array , now array can contain -ve elements if sum is less than 0 then simply return 0
- to solve this problem , naive approach will be through traversing twice which will have O(N^2) time complexity and SC O(1)
- to improve this algorithm we can use kadane's algorithm
- Kadane's Algorithm
- we take sum and max initialised with 0 and -Infinity
- while traversing through array , we will check if sum gives max then assign max , and if sum < 0 then we reassign sum to 0 as -ve value will only decrease the max value 

```ts
function maxSubArraySum(arr: number[]){
    let sum = 0;
    let max = -Infinity

    for(let i = 0 ; i < arr.length; i++){
        // add the current value to sum
        sum += arr[i]
        // sum is bigger than max assign sum to max
        max = Math.max(sum, max)

        // if sum become negative then this value will only decrease the value 
        if(sum < 0){
            sum = 0
        }
    }
    return max
}

export function Call_MaxSubArraySum(){
    console.log(maxSubArraySum([-4,-2, 4, -1, -2, 1, 5, -3]))
}
```
