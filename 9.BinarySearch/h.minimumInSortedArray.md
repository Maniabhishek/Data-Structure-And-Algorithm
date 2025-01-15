- the task is to find the minimum in sorted rotated array
- let's take an example [4,5,6,7,0,1,2,3]
- now again we have sorted rotated array
- the moment we see sorted it means we can use binary search techinique
- here low  = 0 and mid = 3 high = 7
- mid value is 7  low is 4 and high is 3, 4 < 7 which means left part of the array is sorted
- and we also know one of the part of the array has to be sorted if you think since it rotated sorted array
- left part is sorted thus minimum value on the left is arr[low] so update min value
- once we updated , if there exist even smaller value than minimum then it has to be on the right side of the array
- then simply update low = mid +1
- if for example right side is sorted then take the mid value as min , and update high = mid - 1

- we can add an optimization in above code , let's 
- [0,1,2,3] this array is already sorted which arr[low] <= arr[high]
- whenver this sitation meets array will always be sorted so no need to do binary search \
- this condition is true because we rotating from right and if it rotated and array is not sorted in that case arr[low] will never be less than arr[high]
- but when it sorted then it will be the case that arr[low] <= arr[high] take low value and update minimum
```ts
if(arr[low] <= arr[high]) {
min = arr[low]
break
} ```
```ts
function minimumInSortedArray(arr: number[]){
    let low = 0;
    let high = arr.length - 1
    let min = Infinity
    while(low <= high){
        let mid = Math.floor((low + high)/2)

        if(arr[low] <= arr[mid]) {
            min = Math.min(min, arr[low])
            low = mid + 1
        }else {
            min = Math.min(min, arr[mid])
            high = mid -1
        }
    }
    return min
}

export function CallminimumInSortedArray(){
    let arr = [4,5,6,7,0,1,2]
    arr = [3,4,5,6,7,1,2]
    console.log(minimumInSortedArray(arr))
}

```
