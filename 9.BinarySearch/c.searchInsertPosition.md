- You are given a sorted array 'arr' of distinct values and a target value 'm'. You need to search for the index of the target value in the array.
Note:
1. If the value is present in the array, return its index.
2. If the value is absent, determine the index where it would be inserted in the array while maintaining the sorted order. 
3. The given array has distinct integers.
4. The given array may be empty.

Example:
Input:  arr = [1, 2, 4, 7],  m = 6 

Output: 3

- Explanation: If the given array 'arr' is: [1, 2, 4, 7] and m = 6. We insert m = 6 in the array and get 'arr' as: [1, 2, 4, 6, 7]. The position of 6 is 3 (according to 0-based indexing)

```ts
function searchInsertPosition(arr: number[], numToFind: number){
    let low = 0;
    let high = arr.length-1

    while(low <= high){
        let mid = Math.floor(low + (high-low)/2)

        if(arr[mid] === numToFind){
            return mid
        }else if( numToFind > arr[mid] ){
            low = mid+1
        }else {
            high = mid-1
        }
    }

    return low
}

export function CallsearchInsertPosition(){
    const arr = [1,2,4,7]
    console.log(searchInsertPosition(arr, 0))
}

// 1,2,4,7 the above question is to find the searchPosition, 
// let's say we have 6 to insert, then 6 will go at index 3 and it will be [1,2,4,6,7]
// and what is the lower bound of 6 which means smallest index at which arr[index] >= 6
// 7 is >= 6 and it's index is 3 and in our case answer is 3 

function searchInsertPositionUsingLowerBound(arr: number[], num: number){
    let low = 0;
    let high = arr.length-1

    let ans = arr.length
    while(low <= high){
        let mid = Math.floor(low + (high - low)/2)
        if(arr[mid] >= num) {
            ans = mid
            high = mid-1
        }else {
            low = mid+1
        }
    }
    return ans
}

export function callsearchInsertPositionUsingLowerBound(){
    const arr: number[] = [1,2,4,7]
    console.log(searchInsertPositionUsingLowerBound(arr, 6))
}

```
