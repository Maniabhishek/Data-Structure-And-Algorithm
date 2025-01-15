- find out how many times array has been rotated
- so let's see an example [5,6,1,2,3]
- above array has been rotated twice, and the smallest number in the array at index 2
- so if we are able to find the smallest number we also get the number of times array has been rotated
- so previous problem what we solved could be solution with small change to store the index

```ts
function NumberOfRotation(arr: number[]){
    let low = 0;
    let high = arr.length - 1

    let ans = 0
    let smallest = Infinity
    while(low <= high){
        let mid = Math.floor((low+high)/2)

        // if low <= high this means array is completely sorted
        if(arr[low] <= arr[high]){
            if(arr[low] < smallest){
                smallest = arr[low]
                ans = low
                break
            }
        }

        if(arr[low] <= arr[mid]){
            if(arr[low] < smallest){
                smallest = arr[low]
                ans = low
            }
            low = high + 1
        }else {
            if(arr[mid] < smallest){
                smallest = arr[mid]
                ans = mid
            }
            high = mid - 1
        }
    }
    return ans
}

export function callNumberOfRotation(){
    const arr = [5,6,1,2,3,4]
    console.log(NumberOfRotation(arr))
}
```
