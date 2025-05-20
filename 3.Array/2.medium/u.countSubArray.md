> Given an array of integers and an integer k, return the total number of subarrays whose sum equals k. A subarray is a contiguous non-empty sequence of elements within an array.

- this is simlar to the problem k.longestSubArray approach , only difference is , we are trying find the total count of subarray
- in this case we are taking a map with count as value amd sum as key
```ts
function countSubArray(arr: number[], k: number){
    let map: Record<number, number> = {0: 1}
    let sum = 0;
    let count = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(map[sum-k] != null) {
            count += map[sum-k]
        }

        if(map[sum] == null){
            map[sum] = 0
        }
        map[sum] += 1
    }
    console.log(count)
}

export function Call_CountSubArray(){
    const arr = [1,2,3,-3,1,1,1,4,2,-3]
    countSubArray(arr, 3)
}

```
