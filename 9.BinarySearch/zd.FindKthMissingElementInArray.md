- we are given an array with some missing value from 1..n
- it could be in any order
- [1,5,3,7] , in order to find the optimized code
- let's first sort the array
- [1,3,5,7]
- ideally if there were no missing element then array will be [1,2,3,4]
- 1st missing element will be 2 
- in given index 1 element is 3 (should have been 2) if 3 - (idx + 1) = 1 missing element 
- so based on missing count we can eliminate left and right half
- if missing count is less than k , then obviously we need to move right 
- what if equal , if equal which mean going right will only increase the missing count , left is what we need to move for both greater than or equal to case

function findKthMissingInUnSortedArray(arr: number[], k: number){
    arr = [...new Set(arr)].sort((a,b)=> a-b)

    let left = 0;
    let right = arr.length - 1

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        let missingCount = arr[mid] - (mid+1)

        if(missingCount < k){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return left + k
}

export function CallfindKthMissingInUnSortedArray(){
    let arr = [1,2,3,5,7,8]
    console.log(findKthMissingInUnSortedArray(arr,3))
}
