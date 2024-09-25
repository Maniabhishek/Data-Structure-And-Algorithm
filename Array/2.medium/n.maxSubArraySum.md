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
