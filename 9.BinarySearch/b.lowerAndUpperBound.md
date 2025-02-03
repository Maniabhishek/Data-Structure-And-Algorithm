- Given a sorted array arr[] and a number target, the task is to find the lower bound of the target in this given array. The lower bound of a number is defined as the smallest index in the sorted array where the element is greater than or equal to the given number.

```ts

// lower boound - smallest index for which arr[index] >= number(given number)
// we take the low and high 
// take mid and compare arr[mid]>= givenNUm
// if bigger then high = mid -1, and update ans = mid-1, and keep doing this until low>=high
function lowerBound(arr: number[], num: number, low: number, high: number, ans: number){
    if( low > high) {
        return ans
    }
    let mid = Math.floor(low + (high-low)/2)

    if(arr[mid] >= num){
        ans = Math.min(mid, ans)
        high = mid-1
    }else {
        low = mid+1
    }
    return lowerBound(arr, num, low, high, ans)
}

export function calllowerBound(){
    const arr = [1,2,4,5,6,7,7,8,8,9,9,10]
    console.log(lowerBound(arr, 11, 0, arr.length - 1, arr.length))
}

// in this case there is only one change instead of >= it will be just > so change in logic will be > from >= in above code
function upperBound(arr: number[], num: number, low: number, high: number, ans: number){
    if( low > high) {
        return ans
    }
    let mid = Math.floor(low + (high-low)/2)

    if(arr[mid] > num){
        ans = Math.min(mid, ans)
        high = mid-1
    }else {
        low = mid+1
    }
    return lowerBound(arr, num, low, high, ans)
}

```
