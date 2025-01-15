- this question is similar to the previous one, only difference here is that array can contain duplicates
- can we use the same logic as previous one , let's see
- let's take an example : [3,1,2,3,3,3,3,3]
- so here in this case mid value is 3 low is also 3 and high is 3 too
- so we cannot decide which half is sorted , so what we can do is we can trim down

```ts
function searchElementInSortedArray(arr: number[], target: number){
    let low = 0;
    let high = arr.length-1

    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] === target) return mid
        if(arr[low] === arr[mid] && arr[mid] === arr[high]){
            low = low+1
            high = high-1
            continue
        }else if(arr[low] <= arr[mid]){
            if(arr[low] <= target && target <= arr[mid]){
                high = mid-1
            }else {
                low = mid + 1
            }
        }else {
            if(arr[mid] <= target && target <= arr[high]){
                low = mid+1
            }else {
                high = mid - 1
            }
        }
    }

    return -1
}

export function callsearchElementInSortedArrayDuplicate(){
    const arr = [3,1,2,3,3,3,3,3]
    console.log(searchElementInSortedArray(arr, 1))
}

```
