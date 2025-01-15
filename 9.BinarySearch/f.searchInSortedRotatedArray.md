- You have been given a sorted array/list 'arr' consisting of 'n' elements. You are also given an integer 'k'
- now the array is rotated at some pivot point unknown to you
- For example if 'arr' = [1,3,5,7,8] then after rotating arr at index 3 , the array will be arr = [7,8,1,3,5].
- now your task is to find at which index 'k' is present in 'arr'

### solution
- whenever there is sorted array and we have to search element, first approach that should come to our mind is binary search
- example : [7,8,1,3,5]
- it is sure that half part of the array is sorted
- so we take the mid value and check which part of array is sorted
- first let's check left part with mid = 2
- at low = 0 index 7 < 1 false then right part has to be sorted , i.e., 1 to 5 and target is let's 3, 3 > 1 and 1<5 then for sure 3 lies after 1
- so update low = 3, high = 4
- now mid = 3 arr[3] is 3 we can return mid


```ts
function searchElementInSortedArray(arr: number[], target: number){
    let low = 0;
    let high = arr.length-1

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] === target){
            return mid
        }

        // left sorted 
        if(arr[low] <= arr[mid]){
            if(arr[low] <= target && target <= arr[mid]){
                high = mid - 1
            }else {
                low = mid+1
            }
        }else {
            if(arr[mid] <= target && target <= arr[high]){
                low = mid+1
            }else {
                high = mid-1
            }
        }
    }
    return -1
}

export function callsearchElementInSortedArray(){
    const arr = [4,5,1,2,3]

    console.log(searchElementInSortedArray(arr, 1))
}
```
