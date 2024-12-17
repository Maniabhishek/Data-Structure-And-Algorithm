### binarySearch

```ts
function binarySearch(arr: number[], low: number, high: number, search: number){
    if(low > high) return -1

    let mid = Math.floor((low + high)/2)
    if(arr[mid] === search){
        return mid
    }else if(search > arr[mid]) {
        return binarySearch(arr, mid+1, high, search)
    }else return binarySearch(arr, low, mid-1, search)
}

export function CallBinarySearchArray(){
    const arr = [2,3,5,6,7,9,10,13,15,17]
    console.log(binarySearch(arr, 0, arr.length-1, 10))
}
```
- in above code , when we are calculating mid value using using low and high , there could be chances that high will be INT_MAX, then when target element that need to be searched is at the end index then low+high/2 this calculation ends up being overflown, so to avoid that we can use low + (high-low)/2
