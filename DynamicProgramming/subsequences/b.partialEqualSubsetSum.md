> - You are given an array of N positive integers. Your task is to find if we can partition the given array into two subsets such that the sum of elements in both subsets is equal.
> - for example let's say the given array is [2,3,3,3,4,5], then the array can be partitioned as [2,3,5] [3,3,4] which equals sum 10

### explanation
- two subset with equal sum , which means total sum of the given array is would be sum of both the subset , or if we sum all the elements of the given array and divide it by two , then if we find the subset with sum equivalent to half of total sum then we got the 1st half and then remaining element will also give us same as previous subset
- so this problem became similar to the previous one , all we need to do is to find the sum of the one subset which equals half of total sum of the array

```ts
function partialEqualSum(arr: number[], target: number, idx: number){
    if(target === 0) return true
    if(idx === 0) return arr[0] === target

    const not_take = partialEqualSum(arr, target, idx-1)
    let take = false
    if(target >= arr[idx]){
        take = partialEqualSum(arr, target-arr[idx], idx-1)
    }

    return not_take || take
}

export function CallpartialEqualSum(){
    const arr: number[] = [2,3,1,4,6,1,1,3,5,2]

    const sum = arr.reduce((p, c)=> p+c)

    if(sum%2 !== 0){
        console.log(false)
    }else {
        const half = sum/2
        const res = partialEqualSum(arr, half, arr.length-1)
        console.log(res)
    }
}
```
