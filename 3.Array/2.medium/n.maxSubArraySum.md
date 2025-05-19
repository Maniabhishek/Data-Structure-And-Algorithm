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
- to solve this problem , naive approach will be through traversing twice which will have O(N^3) time complexity and SC O(1)
```js
function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // subarray = arr[i.....j]
            let sum = 0;

            //add all the elements of subarray:
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }

            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log(`The maximum subarray sum is: ${maxSum}`);

```
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

- to print the subarray\
```js

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    let start = 0;
    let ansStart = -1, ansEnd = -1;
    for (let i = 0; i < n; i++) {

        if (sum == 0) start = i; // starting index

        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;

            ansStart = start;
            ansEnd = i;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    //printing the subarray:
    console.log("The subarray is: [");
    for (let i = ansStart; i <= ansEnd; i++) {
        console.log(arr[i] + " ");
    }
    console.log("]n");

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
let maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);


```
