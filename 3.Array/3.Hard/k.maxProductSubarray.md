- we need to find the max product of subarray 
- [3,2,1,5,4,-1,3,4,2] ans: 120
- naive solution is using brute force and generating all the subarray
- but that will have O(n^2) TC
- lets look for an optimal solution
- lets observe: 1. if all the elements are positive then max product will be product of all the elements 
- 2. if array has even elements 
- 3. if array has odd elements
- 4. if array contains 0 
- let's see by example
- [2,3,4,-1,2,3] answer will only be from before -1 or after -1 
- when two -ves [2,3,4,-1,2,3,-1,2,2], now that we have even -ves here the result will be product of all the elements
- when we have odd -ves [2,3,4,-1,2,3,-1,2,2,-1,3,2,1,4] result should be from after 1st -1 or before the last -1
- [2,3,4,-1,0,2,3,-1,2,2] what if there was 0, so when ever we get 0 we can now assume there are two subarray or more before and after 0

```ts
function maxProductSubarray(arr: number[]){
    let prefix = 1
    let suffix = 1
    let max = -Infinity

    for(let i = 0; i< arr.length; i++){
        if(arr[i] === 0 ) prefix = 1
        if(arr[arr.length - 1-i] === 0 ) suffix = 1

        prefix *= arr[i] 
        suffix *= arr[arr.length - 1 - i] 

        max = Math.max(prefix, max)
        max = Math.max(suffix, max)
    }
    console.log(max)
}

export function call_maxProductSubarray(){
    maxProductSubarray([2,3,4,-1,0,2,3,-1,2,2])
}
```
